import React from 'react'
import { Client as StyletronClient } from 'styletron-engine-atomic'
import { Provider as StyletronProvider } from 'styletron-react'
import { BaseProvider } from 'baseui'

import { theme } from 'theme'

const styletronClient = new StyletronClient()

export const LibraryProviders: React.FC = ({ children }) => (
  <StyletronProvider value={styletronClient}>
    <BaseProvider theme={theme}>
      {children}
    </BaseProvider>
  </StyletronProvider>
)
