import React, { useState } from 'react';
import InputFormItem from '../formItem';
import { Button, Form } from 'antd';

const LoginForm = (props) => {

    const onFinish = (values) => {
        console.log('Values', values);
    }

    const GoToRegisterScreen = () => {
        props.history.push('/register')
    }

    return(
        <Form name="basic"
            labelCol={{
                span: 8,
            }}
            wrapperCol={{
                span: 16,
            }}
            initialValues={{
                remember: true,
            }}
            onFinish={onFinish}
            autoComplete="off"
        >
            <InputFormItem labelName = 'Email' name = 'email' />
            <InputFormItem labelName = 'Password' name = 'password' />
            <Form.Item
                wrapperCol={{
                offset: 8,
                span: 16,
                }}
            >
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
            <Button onClick={GoToRegisterScreen}>Not Registered Yet? Register Now</Button>
        </Form> 
    )
}

export default LoginForm