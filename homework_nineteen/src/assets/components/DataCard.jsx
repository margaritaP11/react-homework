import React from 'react'
import { Card, Typography } from 'antd'
const { Paragraph } = Typography

export const DataCard = ({ data }) => {
  if (!data) return null
  return (
    <Card title="Sent data" style={{ marginTop: 24 }}>
      <Paragraph>
        <strong>Name:</strong>
        {data.name}
      </Paragraph>
      <Paragraph>
        <strong>Description:</strong>
        {data.description}
      </Paragraph>
    </Card>
  )
}

export default DataCard
