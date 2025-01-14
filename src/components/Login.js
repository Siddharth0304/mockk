"use client";
import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import { useRouter } from 'next/navigation'

export default function Login() {
    const router = useRouter()

    const onFinish = (values) => {
        console.log('Success:', values);
        router.push('/device')
    
    };
    const onFinishFailed = (errorInfo) => {
      console.log('Failed:', errorInfo);
    };
  return (
    <div style={{display:'flex'}}>
      <div style={{width:'50%'}}>
        <img src={'/Login_Image.jpg'} style={{width:'100%',height:'100vh',maxHeight:'800px'}}></img>
      </div>
      <div style={{display:'flex',justifyContent:'center',width:'50%',padding:'2%'}}>
        <div>
        <h1>Welcome to Value-Connect</h1>
        <Form
            name="basic"
            style={{
            maxWidth: 800,
            }}
            initialValues={{
            remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            <Form.Item
            label="Username"
            name="username"
            rules={[
                {
                required: true,
                message: 'Please input your username!',
                },
            ]}
            >
            <Input />
            </Form.Item>

            <Form.Item
            label="Password"
            name="password"
            rules={[
                {
                required: true,
                message: 'Please input your password!',
                },
            ]}
            >
            <Input.Password />
            </Form.Item>

            <Form.Item name="remember" valuePropName="checked" label={null}>
            <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item label={null}>
            <Button type="primary" htmlType="submit">
                Submit
            </Button>
            </Form.Item>
        </Form>
        </div>
      </div>
    </div>
  )
}
