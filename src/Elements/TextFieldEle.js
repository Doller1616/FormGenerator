import React from 'react'
import { Input } from 'antd'

export default function TextFieldEle(props) {
  const { type, placeholder, name, handleMouseOver } = props;
  return (<div style={{ gridArea: name }} onDragOver={handleMouseOver} draggable >
    <Input 
      type={type}
      status="error" 
      placeholder={placeholder}
      />
  </div>)
}
