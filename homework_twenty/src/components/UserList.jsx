import React from 'react'
import { useSelector } from 'react-redux'

export const UserList = () => {
  const users = useSelector((state) => state.users)
  return (
    <div>
      <h2>Список пользоветелей</h2>
      <ul style={{ listStylePosition: 'inside', paddingLeft: 0 }}>
        {users.map((user) => (
          <li key={user.id}>
            <strong>{user.name}</strong> - {user.email}
          </li>
        ))}
      </ul>
    </div>
  )
}
