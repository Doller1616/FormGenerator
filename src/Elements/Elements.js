import React from 'react';
import TextFieldEle from './TextFieldEle';
import SingleImgEle from './SingleImgEle';

export default function FormElements({properties}) {

  const { element = 'TextField' } = properties || {};

  const Element = {
    TextField: <TextFieldEle {...properties} />,
    SingleImg: <SingleImgEle {...properties} />,
  }

  return <> {Element[element] || 'No Element'} </>;
}
