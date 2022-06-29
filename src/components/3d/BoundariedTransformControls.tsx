import { TransformControls, TransformControlsProps } from '@react-three/drei'
import { Vector3 } from 'three'
import { Vector3Array } from 'types/common'

interface BoundariedTransformControlsProps extends Omit<TransformControlsProps, 'ref'> {
  boundaries: Vector3Array
}

export const BoundariedTransformControls = ({
  boundaries,
  ...props
}: BoundariedTransformControlsProps) => {
  const [sizeX, sizeY, sizeZ] = boundaries

  return (
    <TransformControls
      onChange={(e) => {
        const movingObject = e?.target.object
        if (movingObject) {
          movingObject.position.clamp(
            new Vector3(-sizeX / 2, -sizeY / 2, -sizeZ / 2),
            new Vector3(sizeX / 2, sizeY / 2, sizeZ / 2),
          )
        }
      }}
      {...props}
    />
  )
}
