import React from 'react';
import Element from '../Elements/Elements';

export default function FormGenerator({ elementsJson, handleMouseOver, handleMouseLeave }) {
  const { elements = [], view = [], rows, columns, gap } = elementsJson || {};

  console.log(view)

  
  const gTemplateArea = view.reduce((acc, arr) => {
    const fillEmpty = Array.from({length: arr.length },(it, i) => arr[i] ? arr[i] : '.');
    return (`${acc} '${fillEmpty.join(' ')}'`)
  }, ``);
  // const gRows = Array.from({length: rows}, it => 'auto').join(' ');
  // const gColumns = Array.from({length: columns}, it => 'auto').join(' ');
  console.log("template", gTemplateArea)
  return (<div style={{padding: '1rem'}}>
    <h1>FormGenerator</h1>
    {/* label must be unique */}
    <div style={{display: 'grid', 
         gridTemplateColumns: `repeat(${columns}, 1fr)`, 
         gridTemplateRows: `repeat(${rows}, 1fr)`, 
         gridTemplateAreas: gTemplateArea,
         gap: gap}}>
    { elements.map((config, index) => 
       <Element key={index} 
         properties={config} 
         handleMouseOver={handleMouseOver}
         handleMouseLeave={handleMouseLeave}
         />) }
    </div>
    </div>)
}
