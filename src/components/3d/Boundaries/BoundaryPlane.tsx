import { MeshProps } from '@react-three/fiber'

interface BoundaryPlaneProps extends MeshProps {
  size?: readonly [number, number]
}

export const BoundaryPlane = ({
  size = [10, 10],
  ...props
}: BoundaryPlaneProps) => (
  <mesh {...props}>
    <planeBufferGeometry args={[size[0], size[1], size[0], size[1]]} />
    <meshStandardMaterial color="grey" />
  </mesh>
)
