import { MutableRefObject, Suspense, useRef, useState } from 'react'
import { Environment, OrbitControls } from '@react-three/drei'
import { theme } from 'theme'
import { Boundaries } from './Boundaries/Boundaries'
import { BoundariedTransformControls } from './BoundariedTransformControls'
import { StartingPointBox } from './StartingPointBox'
import { EndPointBox } from './EndPointBox'
import { Mesh, Object3D } from 'three'
import { useAtom } from 'jotai'
import { sceneAtoms } from 'store/scene'

export const Scene = () => {
  const [size] = useAtom(sceneAtoms.sizeAtom)
  // Rule disabled due to ref has to be a MutableRefObject
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const startingPointBoxRef = useRef<Mesh>(null!)
  // Rule disabled due to ref has to be a MutableRefObject
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const endPointBoxRef = useRef<Mesh>(null!)

  const [
    transformObjectRef,
    setTransformObjectRef,
  ] = useState<MutableRefObject<Object3D> | null>(null)

  return (
    <>
      <color attach="background" args={[theme.colors.backgroundSecondary]} />
      <Suspense fallback={null}>
        <Environment preset="sunset" />
        <OrbitControls makeDefault />
        {transformObjectRef && (
          <BoundariedTransformControls
            boundaries={size}
            translationSnap={1}
            object={transformObjectRef}
          />
        )}
        <StartingPointBox
          ref={startingPointBoxRef}
          onClick={() => setTransformObjectRef(startingPointBoxRef)}
        />
        <EndPointBox
          ref={endPointBoxRef}
          onClick={() => setTransformObjectRef(endPointBoxRef)}
        />
        <Boundaries boundarySize={size} />
      </Suspense>
    </>
  )
}
