import { Block, BlockProps } from 'baseui/block'

export const FlexContainer = (props: BlockProps) => (
  <Block
    display="flex"
    justifyContent="space-between"
    width="100%"
    {...props}
  />
)
