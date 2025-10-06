import styles from './UserItem.module.css'

const UserItem = ({ user }) => {
  return <li className={styles.item}>{user}</li>
}
export default UserItem
