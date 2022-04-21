import { styled } from 'baseui'
import { LibraryProviders } from 'components/providers/LibraryProviders'
import { AlgorithmProperties } from 'components/properties/AlgorithmProperties'
import { Controls } from 'components/properties/Controls'
import { Spacer } from 'components/layout/Spacer'
import { useIsMobile } from 'hooks/useIsMobile'
import MobileProperties from 'components/mobile/MobileProperties'
import { ContextProviders } from 'components/providers/ContextProviders'
import { SceneProperties } from 'components/properties/SceneProperties'
import { Scene } from 'components/3d/Scene'

const RootContainer = styled('div', {
  display: 'flex',
  flex: 1,
  height: '100vh',
}) 

const SceneContainer = styled<{ $fullWidth?: boolean }, 'div'>('div', ({ $fullWidth }) => ({
  width: $fullWidth ? '100%' : '70%',
}))

const PropertiesContainer = styled('div', ({ $theme }) => ({
  position: 'absolute',
  top: 0,
  right: 0,
  bottom: 0,
  width: '30%',
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: $theme.colors.backgroundPrimary,
  padding: $theme.sizing.scale600,
  justifyContent: 'space-between',
}))
const OpenDrawerButton = styled(MobileProperties.OpenDrawerButton, ({ $theme }) => ({
  position: 'absolute',
  top: $theme.sizing.scale200,
  right: $theme.sizing.scale200,
}))

const MobileControlsContainer = styled('div', ({ $theme }) => ({
  position: 'absolute',
  bottom: 0,
  margin: $theme.sizing.scale200,
  width: '100%',
}))

const App = () => {
  const isMobile = useIsMobile()

  return (
    <LibraryProviders>
      <ContextProviders>
        <RootContainer>
          <SceneContainer $fullWidth={isMobile}>
            <Scene />
          </SceneContainer>
          {isMobile ? (
            <>
              <MobileProperties>
                <OpenDrawerButton />
                <MobileProperties.Drawer>
                  <AlgorithmProperties />
                </MobileProperties.Drawer>
              </MobileProperties>
              <MobileControlsContainer>
                <Controls />
              </MobileControlsContainer>
            </>
          ) : (
            <PropertiesContainer>
              <div>
                <AlgorithmProperties />
                <Spacer $orientation="vertical" />
                <SceneProperties />
              </div>
              <Controls />
            </PropertiesContainer>
          )}
        </RootContainer>
      </ContextProviders>
    </LibraryProviders>
  )
}

export { App }
