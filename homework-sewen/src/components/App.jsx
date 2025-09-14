import '../App.css'
import Language from './Language'
import Switchers from './Switchers'
import Text from './Text'

function App() {
  return (
    <Language>
      <div className="container">
        <Switchers />
        <Text />
      </div>
    </Language>
  )
}

export default App
