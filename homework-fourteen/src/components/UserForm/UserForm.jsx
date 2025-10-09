import React, { useState } from 'react'
import { connect } from 'react-redux'
import { setUserInfo } from '../../redux/actions'
import { Button, TextField } from '@mui/material'

const UserForm = ({ setUserInfo }) => {
  const [name, setName] = useState('')
  const [status, setStatus] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setUserInfo({ name, status })
    setName('')
    setStatus('')
  }
  return (
    <form onSubmit={handleSubmit}>
      <TextField
        value={name}
        onChange={(e) => setName(e.target.value)}
        label="Имя"
        fullWidth
        variant="outlined"
        margin="normal"
        sx={{ background: '#82ccdd' }}
      />
      <TextField
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        label="Статус"
        fullWidth
        variant="outlined"
        margin="normal"
        sx={{ background: '#82ccdd' }}
      />
      <Button
        type="submit"
        variant="contained"
        color="secondary"
        sx={{ background: '#3c6382' }}
      >
        Кликни
      </Button>
    </form>
  )
}

export default connect(null, { setUserInfo })(UserForm)
