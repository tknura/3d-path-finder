import { useAtom } from 'jotai'
import { Heading, HeadingLevel } from 'baseui/heading'
import { Vector3Input } from 'components/inputs/vector3-input/Vector3Input'
import { sceneAtoms } from 'store/scene'

export const SceneProperties = () => {
  const [size, setSize] =  useAtom(sceneAtoms.sizeAtom)

  return (
    <HeadingLevel>
      <Heading>
        Scene
      </Heading>
      <Vector3Input
        label="Space size"
        value={Array.isArray(size) ? size : undefined}
        onChange={(newSize) => setSize([...newSize])}
        min={[0, 0, 0]}
        max={[200, 200, 200]}
      />
    </HeadingLevel>
  )
}
