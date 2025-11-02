import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { login } from '../../redux/authSlice'

const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogin = () => {
    const fakeToken = ' abc123'
    dispatch(login(fakeToken))
    navigate('/profile')
  }

  return (
    <div>
      <h2>Login Page </h2>
      <button onClick={handleLogin}>Login</button>
    </div>
  )
}
export default Login
