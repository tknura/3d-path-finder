import { styled, Theme } from 'baseui'

export interface SpacerProps {
  $orientation?: 'horizontal' | 'vertical'
  $size?: string
}

export const Spacer = styled<SpacerProps, 'div'>('div', ({ $theme, $orientation, $size }) => {
  const marginSize = $size || $theme.sizing.scale500
  const orientation = $orientation || 'horizontal'

  return orientation === 'horizontal'
    ? {
      marginRight: marginSize,
      marginLeft: marginSize,
    } : {
      marginTop: marginSize,
      marginLeft: marginSize,
    }
})
