import { GroupProps, Vector3 } from '@react-three/fiber'
import { BoundaryPlane } from './BoundaryPlane'

interface BoundariesProps extends GroupProps {
  boundarySize?: Vector3
}

export const Boundaries = ({
  boundarySize = [10, 10, 10],
  ...props
}: BoundariesProps) => {
  if (!Array.isArray(boundarySize)) {
    // TO DO add number and THREE.Vector3 type parsing
    return null
  }
  const [boundarySizeX, boundarySizeY, boundarySizeZ] = boundarySize
  const side1Size = [boundarySizeX + 1, boundarySizeY + 1] as const
  const side2Size = [boundarySizeZ + 1, boundarySizeY + 1] as const
  const topBottomSize = [boundarySizeX + 1, boundarySizeZ + 1] as const


  const halfBoundarySizeX = boundarySize[0] / 2
  const halfBoundarySizeY = boundarySize[1] / 2
  const halfBoundarySizeZ = boundarySize[2] / 2

  return (
    <group {...props}>
      {/*  Sides */}
      <BoundaryPlane
        size={side1Size}
        position={[0, 0, -halfBoundarySizeZ - 0.5]}
      />
      <BoundaryPlane
        size={side1Size}
        position={[0, 0, halfBoundarySizeZ + 0.5]}
        rotation={[0, -Math.PI, 0]}
      />
      <BoundaryPlane
        size={side2Size}
        position={[halfBoundarySizeX + 0.5, 0, 0]}
        rotation={[0, - Math.PI / 2, 0]} 
      />
      <BoundaryPlane
        size={side2Size}
        position={[-halfBoundarySizeX - 0.5, 0, 0]}
        rotation={[0, Math.PI / 2, 0]} 
      />
      {/* Top */}
      <BoundaryPlane
        size={topBottomSize}
        position={[0, halfBoundarySizeY + 0.5, 0]}
        rotation={[Math.PI / 2, 0, 0]} 
      />
      {/* Bottom */}
      <BoundaryPlane
        size={topBottomSize}
        position={[0, -halfBoundarySizeY - 0.5, 0]}
        rotation={[-Math.PI / 2, 0, 0]} 
      />
    </group>
  )
}