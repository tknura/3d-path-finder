import { useState } from 'react'
import { Select, Value } from 'baseui/select'
import { algorithmSelectOptions } from './options'

export const AlgorithmSelect = () => {
  const [value, setValue] = useState<Value>([algorithmSelectOptions[0]])

  return (
    <Select
      options={algorithmSelectOptions}
      value={value}
      placeholder="Select algorithm"
      onChange={params => setValue(params.value)}
      searchable={false}
      clearable={false}
      backspaceClearsInputValue={false}
      backspaceRemoves={false}
      required
    />
  )
}
