import Filter from './components/Filter/Filter'
import UserList from './components/UserList/UserList'
import './App.css'

function App() {
  return (
    <div className="container">
      <h1 className="title">User List</h1>
      <Filter />
      <UserList />
    </div>
  )
}

export default App
