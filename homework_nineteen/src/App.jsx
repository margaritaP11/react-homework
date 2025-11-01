import 'antd/dist/reset.css'

import Title from 'antd/es/typography/Title'
import { FormInput } from './assets/components/FormInput'
import { useState } from 'react'
import DataCard from './assets/components/DataCard'

function App() {
  const [submitData, setSabmitDatd] = useState(null)
  return (
    <div style={{ maxWidth: 600, margin: ' 40px auto' }}>
      <Title level={2}>Input form</Title>
      <FormInput onSubmit={setSabmitDatd} />
      <DataCard data={submitData} />
    </div>
  )
}

export default App
