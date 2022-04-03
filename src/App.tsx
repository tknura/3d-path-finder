import { LibraryProviders } from 'components/providers/LibraryProviders'
import { Button } from 'baseui/button'

function App() {
  return (
    <LibraryProviders>
      <div className="App">
        <Button onClick={() => alert('click')}>Hello</Button>
      </div>
    </LibraryProviders>
  )
}

export { App }
