import { ScenePropertiesProvider } from './context/ScenePropertiesProvider'

export const ContextProviders: React.FC = ({ children }) => (
  <ScenePropertiesProvider>
    {children}
  </ScenePropertiesProvider>
)