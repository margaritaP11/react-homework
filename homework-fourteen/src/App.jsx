import './App.css'
import User from './components/User/User'
import UserForm from './components/UserForm/UserForm'
import store from './redux/store'
import { Provider } from 'react-redux'

function App() {
  return (
    <Provider store={store}>
      <User />
      <UserForm />
    </Provider>
  )
}

export default App
