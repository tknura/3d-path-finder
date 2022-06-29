import { atomWithHash } from 'jotai/utils'
import { Vector3Array } from 'types/common'

const sizeAtom = atomWithHash<Vector3Array>('scene-size', [50, 50, 50])
const startPositionAtom = atomWithHash<Vector3Array>('start-position', [0, 0, 0])
const endPositionAtom = atomWithHash<Vector3Array>('end-position', [50, 50, 50])

export const sceneAtoms = {
  sizeAtom,
  startPositionAtom,
  endPositionAtom,
}