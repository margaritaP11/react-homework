import { useState } from 'react'

import '../App.css'
import { CitySelector } from './CitySelector/CitySelector'

function App() {
  const [setSelectedCity] = useState(null)

  return (
    <div>
      <CitySelector onSelect={setSelectedCity} />
    </div>
  )
}

export default App
