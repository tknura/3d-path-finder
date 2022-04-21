import { theme } from 'theme'

import useWindowSize from './useWindowSize'

export const useIsMobile = () => {
  const { width } = useWindowSize()
  return width <= theme.breakpoints.medium
}
