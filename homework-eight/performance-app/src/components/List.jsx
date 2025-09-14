import React, { useState, useEffect } from 'react'

const List = () => {
  const [items, setItems] = useState([])
  const [input, setInput] = useState('')

  const addItem = () => {
    if (input.trim()) {
      setItems([...items, input])
      setInput('')
    }
  }

  useEffect(() => {
    console.log('Компонент обновлен')
  }, [])

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Ввудите текст"
      />
      <button onClick={addItem}>Добавить</button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

export default List
