import React from 'react'
import { Input } from 'antd'

export default function TextFieldEle(props) {
  const handleOnDragOver = (e) => handleMouseOver(e, props);
  const handleOnDragLeave = (e) => handleMouseLeave(e, props);

  const { type, placeholder, name, handleMouseOver, handleMouseLeave } = props;
  return (<div style={{ gridArea: name }} 
        onDragOver={handleOnDragOver} 
        onDragLeave={handleOnDragLeave} 
        draggable >
    <Input 
      type={type}
      status="error" 
      placeholder={placeholder}
      />
  </div>)
}
