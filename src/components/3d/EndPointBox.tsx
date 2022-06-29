import { MeshProps } from '@react-three/fiber'
import { forwardRef } from 'react'

export const EndPointBox = forwardRef<THREE.Mesh, MeshProps>((props, ref) => {
  return (
    <mesh {...props} ref={ref}>
      <boxBufferGeometry />
      <meshStandardMaterial color="red" />
    </mesh>
  )
})
