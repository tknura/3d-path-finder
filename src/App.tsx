import { styled } from 'baseui'
import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls } from '@react-three/drei'

import { LibraryProviders } from 'components/providers/LibraryProviders'
import { AlgorithmProperties } from 'components/properties/AlgorithmProperties'
import { Controls } from 'components/properties/Controls'
import { Spacer } from 'components/layout/Spacer'
import { Suspense } from 'react'

const RootContainer = styled('div', {
  display: 'flex',
  flex: 1,
  height: '100vh',
}) 
const SceneContainer = styled('div', { flex: 7 }) 
const PropertiesContainer = styled('div', ({ $theme }) => ({
  flex: 3,
  backgroundColor: $theme.colors.background,
  padding: $theme.sizing.scale600,
}))

function App() {
  return (
    <LibraryProviders>
      <RootContainer>
        <SceneContainer>
          <Canvas>
            <Suspense fallback={null}>
              <Environment preset="sunset" />
              <OrbitControls makeDefault autoRotate autoRotateSpeed={1.5} />
              <mesh>
                <sphereBufferGeometry />
                <meshStandardMaterial color="hotpink" />
              </mesh>
            </Suspense>
          </Canvas>
        </SceneContainer>
        <PropertiesContainer>
          <AlgorithmProperties />
          <Spacer $orientation="vertical" />
          <Controls />
        </PropertiesContainer>
      </RootContainer>
    </LibraryProviders>
  )
}

export { App }
