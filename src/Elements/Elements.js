import React from 'react';
import TextFieldEle from './TextFieldEle';
import SingleImgEle from './SingleImgEle';

export default function FormElements({properties, handleMouseOver, handleMouseLeave }) {

  const { element = 'TextField' } = properties || {};

  const Element = {
    TextField: <TextFieldEle {...properties} handleMouseOver={handleMouseOver} handleMouseLeave={handleMouseLeave} />,
    SingleImg: <SingleImgEle {...properties} handleMouseOver={handleMouseOver} handleMouseLeave={handleMouseLeave} />,
  }

  return <> {Element[element] || 'No Element'} </>;
}
