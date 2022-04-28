import React from 'react';
import './Contact.css';
import { Form, Input, InputNumber, Button } from 'antd';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import MailOutlineTwoToneIcon from '@mui/icons-material/MailOutlineTwoTone';
import CallTwoToneIcon from '@mui/icons-material/CallTwoTone';
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};

const contact = () => {
 
  return (
    <div>
        <div className='portfolio_txt'>Contact Us</div> 
        <div className='portfolio_txt1'> Contact us the get started</div>
        <div>
        <span><AddLocationIcon fontSize='large' />Location</span><br></br>
       <span><MailOutlineTwoToneIcon  fontSize='large'/>Email</span> <br></br>
        <span><CallTwoToneIcon  fontSize='large'/>Call</span>
        </div>

      <Form {...layout} name="nest-messages"  validateMessages={validateMessages}>
      <Form.Item
        name={['user', 'name']}
        label="Name"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input size='small'/>
      </Form.Item>
      <Form.Item
        name={['user', 'email']}
        label="Email"
        rules={[
          {
            type: 'email',
          },
        ]}
      >
        
        <Input />
      </Form.Item>
      <Form.Item
        name={['user', 'age']}
        label="Age"
        rules={[
          {
            type: 'number',
            min: 0,
            max: 49,
          },
        ]}
      >
        <InputNumber />
      </Form.Item>
      <Form.Item name={['user', 'website']} label="Website">
        <Input size='small'/>
      </Form.Item>
      <Form.Item name={['user', 'introduction']} label="Introduction">
        <Input.TextArea />
      </Form.Item>
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button type="primary" htmlType="submit">
          Send a Message
        </Button>
      </Form.Item>
    </Form>
    
    </div>
  )
}

export default contact