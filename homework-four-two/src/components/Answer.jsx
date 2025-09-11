import React, { useState } from 'react'

const Answer = ({ updatePoints }) => {
  const [input, setInput] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    updatePoints(input)
    setInput('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Ваш ответ"
        required
      />
      <button type="submit"> Ответить</button>
    </form>
  )
}

export default Answer
