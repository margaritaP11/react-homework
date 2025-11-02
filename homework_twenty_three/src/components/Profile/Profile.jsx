import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { logout } from '../../redux/authSlice'

const Profile = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogout = () => {
    dispatch(logout())
    navigate('/login')
  }

  return (
    <div>
      <h2>Welcome to your profile </h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}
export default Profile
