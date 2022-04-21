import { useStyletron } from 'baseui'
import { Button, ButtonProps } from 'baseui/button'
import { FlexContainer } from 'components/layout/FlexContainer'
import { Spacer } from 'components/layout/Spacer'

interface ControlsProps {
  buttonShape?: ButtonProps['shape']
}

export const Controls = ({ buttonShape }: ControlsProps) => {
  const [, theme] = useStyletron()

  return (
    <FlexContainer justifyContent="center">
      <Button
        shape={buttonShape}
        colors={{
          color: theme.colors.primary,
          backgroundColor: theme.colors.positive300,
        }}
      >
        Start 🚩
      </Button>
      <Spacer $size={theme.sizing.scale400} />
      <Button
        shape={buttonShape}
        colors={{
          color: theme.colors.primary,
          backgroundColor: theme.colors.negative300,
        }}
      >
        Stop ✋
      </Button>
      <Spacer $size={theme.sizing.scale400} />
      <Button shape={buttonShape}>
        Clear walls
      </Button>
    </FlexContainer>
  )
}
