import React, { useState } from 'react';
import { Form, Input } from 'antd';

const InputFormItem = (props) => {

    return(
        <Form.Item
            label={props.labelName}
            name={props.name}
            rules={[
            {
                required: true,
                message: `Please Enter Your ${props.labelName}`,
            },
            ]}
        >
            <Input />
        </Form.Item>
    )
}

export default InputFormItem