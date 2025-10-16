import { useState } from 'react'

import './App.css'
import ValueDisplay from './components/ValueDisplay'

function App() {
  const [value, setValue] = useState('')

  return (
    <div className="container">
      <h1>Current and Previous Value</h1>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Введите текст"
        className="input"
      />

      <ValueDisplay value={value} />
      <button onClick={() => setValue('')}>Очистить</button>
    </div>
  )
}

export default App
