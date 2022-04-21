import { useEffect, useState } from 'react'
import { off, on } from 'utils/eventListenerUtils'
import { isBrowser } from 'utils/isBrowser'

interface WindowDimensions {
  width: number
  height: number
}

const useWindowSize = (initialWidth = Infinity, initialHeight = Infinity) => {
  const [windowDimensions, setWindowDimensions] = useState<WindowDimensions>({
    width: isBrowser ? window.innerWidth : initialWidth,
    height: isBrowser ? window.innerHeight : initialHeight,
  })

  useEffect((): (() => void) | void => {
    if (isBrowser) {
      const updateDimensions = () => {
        setWindowDimensions({
          width: window.innerWidth,
          height: window.innerHeight,
        })
      }

      on(window, 'resize', updateDimensions)

      return () => {
        off(window, 'resize', updateDimensions)
      }
    }
  }, [])

  return windowDimensions
}

export default useWindowSize