import React, { useState, useCallback, useMemo } from 'react'
import {
  TextField,
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
  Paper,
} from '@mui/material'
const UserList = () => {
  const userList = [
    { id: 1, name: 'Olena', age: 25, profession: 'Designer' },
    { id: 2, name: 'Ivan', age: 30, profession: 'Software Engineer' },
    { id: 3, name: 'Maria', age: 22, profession: 'Teacher' },
    { id: 4, name: 'Petro', age: 28, profession: 'Mechanic' },
    { id: 5, name: 'Andriy', age: 35, profession: 'Project Manager' },
    { id: 6, name: 'Svitlana', age: 27, profession: 'Doctor' },
    { id: 7, name: 'Oleh', age: 31, profession: 'Data Analyst' },
    { id: 8, name: 'Nataliya', age: 29, profession: 'Marketing Specialist' },
    { id: 9, name: 'Taras', age: 24, profession: 'Photographer' },
    { id: 10, name: 'Yuliya', age: 26, profession: 'UX Researcher' },
  ]

  const [filter, setFilter] = useState('')

  const filterUsers = useCallback(
    (text) => {
      return userList.filter((user) =>
        user.name.toLowerCase().includes(text.toLowerCase())
      )
    },
    [userList]
  )
  const filteredUsers = useMemo(
    () => filterUsers(filter),
    [filter, filterUsers]
  )

  return (
    <Container sx={{ mt: 4, background: '#6F1E51', height: '800px' }}>
      <Typography variant="h4" gutterBottom sx={{ pt: 5, color: '#FDA7DF' }}>
        Список пользователей
      </Typography>
      <TextField
        label="Фильтр"
        variant="outlined"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        sx={{ background: '#B53471', mb: 5 }}
      ></TextField>
      <Paper>
        <List sx={{ background: '#f8a5c2' }}>
          {filteredUsers.map((user) => (
            <ListItem key={user.id}>
              <ListItemText primary={user.name}></ListItemText>
            </ListItem>
          ))}
        </List>
      </Paper>
    </Container>
  )
}

export default UserList
