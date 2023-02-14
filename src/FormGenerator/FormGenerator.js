import React from 'react';
import Element from '../Elements/Elements';

export default function FormGenerator({ elementsJson }) {
  const { elements = [], view = [], rows, columns, gap } = elementsJson || {};

  
  const gTemplateArea = view.reduce((acc, arr) => (`${acc} '${arr.join(' ')}'`), ``);
  // const gRows = Array.from({length: rows}, it => 'auto').join(' ');
  // const gColumns = Array.from({length: columns}, it => 'auto').join(' ');

  return (<div style={{padding: '1rem'}}>
    <h1>FormGenerator</h1>
    {/* label must be unique */}
    <div style={{display: 'grid', 
         gridTemplateColumns: `repeat(${columns}, 1fr)`, 
         gridTemplateRows: `repeat(${rows}, 1fr)`, 
         gridTemplateAreas: gTemplateArea,
         gap: gap}}>
    { elements.map((config, index) => <Element key={index} properties={config} />) }
    </div>
    </div>)
}
