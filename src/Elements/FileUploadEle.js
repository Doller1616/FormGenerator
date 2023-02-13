import React from 'react'
import { Input } from 'antd'

export default function TextFieldEle(props) {
  const { type, placeholder, name } = props;
  return (<div style={{ gridArea: name }}>
    <Input 
      type={type}
      status="error" 
      placeholder={placeholder}
      />
  </div>)
}
