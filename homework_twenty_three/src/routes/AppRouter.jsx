import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Login from '../components/Login/Login'
import Profile from '../components/Profile/Profile'
import ProtectedRoute from '../components/ProtectedRoute/ProtectedRoute'

const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Navigate to="/login" />} />
      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        }
      />
    </Routes>
  </BrowserRouter>
)

export default AppRouter
