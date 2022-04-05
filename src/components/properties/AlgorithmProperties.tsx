import { Heading, HeadingLevel } from 'baseui/heading'

import { AlgorithmSelect } from 'components/inputs/algorithm-select/AlgorithmSelect'

export const AlgorithmProperties = () => {
  return (
    <>
      <HeadingLevel>
        <Heading>
          Algorithm
        </Heading>
        <AlgorithmSelect />
      </HeadingLevel>
    </>
  )
}
