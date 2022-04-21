import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls, TransformControls } from '@react-three/drei'
import { Suspense } from 'react'
import { theme } from 'theme'
import { Boundaries } from './Boundaries/Boundaries'
import { useSceneSize } from 'components/providers/context/ScenePropertiesProvider'

export const Scene = () => {
  const { size } = useSceneSize()

  return (
    <Canvas>
      <color attach="background" args={[theme.colors.backgroundSecondary]} />
      <Suspense fallback={null}>
        <Environment preset="sunset" />
        <OrbitControls makeDefault />
        <TransformControls>
          <mesh>
            <boxBufferGeometry />
            <meshStandardMaterial color="blue" />
          </mesh>
        </TransformControls>
        <Boundaries boundarySize={size} />
      </Suspense>
    </Canvas>
  )
}
