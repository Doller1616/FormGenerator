import React from 'react';
import TextFieldEle from './TextFieldEle';
import SingleImgEle from './SingleImgEle';

export default function FormElements({properties, handleMouseOver}) {

  const { element = 'TextField' } = properties || {};

  const Element = {
    TextField: <TextFieldEle {...properties} handleMouseOver={handleMouseOver} />,
    SingleImg: <SingleImgEle {...properties} handleMouseOver={handleMouseOver} />,
  }

  return <> {Element[element] || 'No Element'} </>;
}
