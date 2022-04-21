import { Vector3 } from '@react-three/fiber'
import constate from 'constate'
import { useState } from 'react'

const initSize: Vector3 = [50, 50, 50]
const initStartPosition: Vector3 = [0, 0, 0]
// TO DO Add calculating based on size
const initEndPosition: Vector3 = [49, 49, 49]

const useScenePropertiesContextBase = () => {
  const [size, setSize] = useState<Vector3>(initSize)
  const [startPosition, setStartPosition] = useState<Vector3>(initStartPosition)
  const [endPosition, setEndPosition] = useState<Vector3>(initEndPosition)

  return {
    size,
    setSize,
    startPosition,
    setStartPosition,
    endPosition,
    setEndPosition,
  }
}

export const [
  ScenePropertiesProvider,
  useSceneSize,
] = constate(
  useScenePropertiesContextBase,
  ({ size, setSize }) => ({ size, setSize }),
)
