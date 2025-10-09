import { connect } from 'react-redux'
import { Typography, Paper } from '@mui/material'
import React from 'react'

const User = ({ name, status }) => {
  return (
    <Paper
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: '30px',
        height: '100px',

        pl: '20px',
        pt: '20px',
        fontSize: '25px',
        background: '#60a3bc',
      }}
    >
      <Typography>Имя пользователя: {name}</Typography>
      <Typography>Статус: {status}</Typography>
    </Paper>
  )
}

const mapStateToProps = (state) => ({
  name: state.name,
  status: state.status,
})

export default connect(mapStateToProps)(User)
