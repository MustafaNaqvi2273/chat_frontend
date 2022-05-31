import React, { useState } from 'react';
import InputFormItem from '../formItem';
import { Button, Form } from 'antd';

const RegisterForm = (props) => {

    const onFinish = (values) => {
        console.log('Values', values);
    }

    const GoToLoginScreen = () => {
        props.history.push('/login')
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
            <InputFormItem labelName = 'Full Name' name = 'name' />
            <InputFormItem labelName = 'Email' name = 'email' />
            <InputFormItem labelName = 'Username' name = 'username' />
            <InputFormItem labelName = 'Password' name = 'password' />
            <InputFormItem labelName = 'Phone Number' name = 'phone' />
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
            <Button onClick={GoToLoginScreen}>Already Registered. Back to Login</Button>
        </Form> 
    )
}

export default RegisterForm