import React, { createContext, ReactNode, useContext, useState } from 'react'
import { Button, ButtonProps } from 'baseui/button'
import { Menu as MenuIcon } from 'baseui/icon'
import { Drawer, DrawerProps } from 'baseui/drawer'

interface MobilePropertiesContextValue {
  isDrawerOpen: boolean
  setDrawerOpen?: (value: boolean) => void
}

const MobilePropertiesContext = createContext<MobilePropertiesContextValue>({ isDrawerOpen: false })

const MobileProperties = ({ children } : { children: ReactNode }) => {
  const [isDrawerOpen, setDrawerOpen] = useState(false) 

  return (
    <MobilePropertiesContext.Provider value={{ isDrawerOpen, setDrawerOpen }}>
      {children}
    </MobilePropertiesContext.Provider>
  )
}

const OpenDrawerButton = (props: ButtonProps) => {
  const { setDrawerOpen } = useContext(MobilePropertiesContext)

  return (
    <Button
      kind="secondary"
      shape="square"
      onClick={() => setDrawerOpen?.(true)}
      {...props}
    >
      <MenuIcon />
    </Button>
  )
}

const MobilePropertiesDrawer: React.FC<DrawerProps> = (props) => {
  const { isDrawerOpen, setDrawerOpen } = useContext(MobilePropertiesContext)

  return (
    <Drawer
      isOpen={isDrawerOpen}
      autoFocus
      size="full"
      onClose={() => setDrawerOpen?.(false)}
      anchor="top"
      {...props}
    />
  )
}

MobileProperties.OpenDrawerButton = OpenDrawerButton
MobileProperties.Drawer = MobilePropertiesDrawer

export default MobileProperties