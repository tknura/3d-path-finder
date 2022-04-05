import { Algorithm } from 'constants/algorithms'

interface AlgorithmSelectOption {
  label: string
  id: Algorithm
}

export const algorithmSelectOptions: AlgorithmSelectOption[] = [
  {
    label: 'A*',
    id: Algorithm.A_STAR,
  },
  {
    label: 'ARA*',
    id: Algorithm.ARA_STAR,
  },
]
