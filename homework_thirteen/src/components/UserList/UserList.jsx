import React from 'react'
import UserItem from '../UserItem/UserItem'
import { useSelector } from 'react-redux'
import styles from './UserList.module.css'

const UserList = () => {
  const users = useSelector((state) => state.users)
  const filter = useSelector((state) => state.filter)

  const filteredUsers = users.filter((user) =>
    user.toLowerCase().includes(filter.toLowerCase())
  )
  return (
    <ul className={styles.list}>
      {filteredUsers.map((user, index) => (
        <UserItem key={index} user={user} />
      ))}
    </ul>
  )
}

export default UserList
