import React from 'react'
import { Input } from 'antd'

export default function TextFieldEle({handleMouseOver, handleMouseLeave, ...rest}) {
  const handleOnDragOver = (e) => handleMouseOver(e, rest);
  const handleOnDragLeave = (e) => handleMouseLeave(e, rest);

  const { type, placeholder, name,  } = rest;
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
