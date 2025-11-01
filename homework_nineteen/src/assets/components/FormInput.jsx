import React from 'react'
import { Form, Input, Button } from 'antd'

export const FormInput = ({ onSubmit }) => {
  const [form] = Form.useForm()
  const handleFinish = (values) => {
    onSubmit(values)
    form.resetFields()
  }

  return (
    <Form form={form} layout="vertical" onFinish={handleFinish}>
      <Form.Item
        label="Name"
        name="name"
        rules={[{ required: true, message: 'Enter your name' }]}
      >
        <Input placeholder="Enter your name" />
      </Form.Item>

      <Form.Item
        label="Description"
        name="description"
        rules={[{ required: true, message: 'Enter description' }]}
      >
        <Input.TextArea rows={4} placeholder="Enter your description" />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          {' '}
          Senden
        </Button>
      </Form.Item>
    </Form>
  )
}
