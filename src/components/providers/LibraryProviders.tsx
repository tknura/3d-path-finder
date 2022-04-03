import React from 'react'
import { Client as StyletronClient } from 'styletron-engine-atomic'
import { Provider as StyletronProvider } from 'styletron-react'
import { BaseProvider, DarkTheme } from 'baseui'

const styletronClient = new StyletronClient()

export const LibraryProviders: React.FC = ({ children }) => (
  <StyletronProvider value={styletronClient}>
    <BaseProvider theme={DarkTheme}>
      {children}
    </BaseProvider>
  </StyletronProvider>
)
