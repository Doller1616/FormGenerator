import React from 'react'
import { Col, Layout, Row } from 'antd';
import FormGenerator from '../FormGenerator/FormGenerator';
import formConfig from '../formConfig.json';

const sides = {
  LEFT: "left",
  RIGHT: "right",
  TOP: "top",
  Bottom: "bottom",
};

export default function PlayGround() {
  const cssprop = ['border-top', 'border-right', 'border-bottom', 'border-left'];
  let dragFinish = {
    delatis: null,
    target: <a />,
    side: '' 
  }

  const generateView = (formConfig) => {
    const elements = formConfig.elements;
    let xR = Array.from({ length: formConfig.rows }, () => []);
    elements.forEach(element => {
      element.row.forEach((r) => {
        element.col.forEach((c) => {
          xR[r][c] = element.name
        })
      })
    });

    return xR
  }

  const handleMouseOverElement = (event) => {
    event.target.style.border = '2px solid pink';
    // console.log('MouseOver',event.target);
  }

  const handleMouseLeaveElement = (event) => {
    event.target.style.border = 'unset';
    // console.log('MouseLeave',event.target);
  }

  const handleDragStart = (event) => {
    console.log('Start', event);
  }

  const handleDragEnd = (event) => {
    cssprop.forEach((e) => dragFinish.target.style.removeProperty(e));
    console.log('End', dragFinish);
  }

  const handleMouseOver = (event, args) => {
    event.preventDefault();
    const rect = event.target.getBoundingClientRect();
    const { x, y, width, height } = rect;
    const cursorX = event.clientX;
    const cursorY = event.clientY;

    const distanceTop = cursorY - y;
    const distanceBottom = y + height - cursorY;
    const distanceLeft = cursorX - x;
    const distanceRight = x + width - cursorX;

    const Top = (distanceTop < distanceBottom && distanceTop < distanceLeft && distanceTop < distanceRight);
    const Bottom = (distanceBottom < distanceTop && distanceBottom < distanceLeft && distanceBottom < distanceRight);
    const Left = (distanceLeft < distanceTop && distanceLeft < distanceBottom && distanceLeft < distanceRight);
    const Right = (distanceRight < distanceTop && distanceRight < distanceBottom && distanceRight < distanceLeft);
    cssprop.forEach((e) => event.target.style.removeProperty(e));
    // Column left
    if (Left) {
      event.target.style.borderLeft = '4px solid red';
      dragFinish.side = sides.LEFT;
      dragFinish.delatis = args;
    }// Column right
    else if (Right) {
      event.target.style.borderRight = '4px solid red';
      dragFinish.side = sides.RIGHT;
      dragFinish.delatis = args;
    } // Row top
    else if (Top) {
      event.target.style.borderTop = '4px solid red';
      dragFinish.side = sides.TOP;
      dragFinish.delatis = args;
    } // Bottom
    else if (Bottom) {
      event.target.style.borderBottom = '4px solid red';
      dragFinish.side = sides.Bottom;
      dragFinish.delatis = args;
    } else {
      dragFinish.delatis = null;
    }
    dragFinish.target = event.target;
  }

  const handleMouseLeave = (event, args) => {
    cssprop.forEach((e) => event.target.style.removeProperty(e));
  }

  const deco = window.structuredClone(formConfig);
  deco.view = generateView(formConfig);
  return (<Layout >
    <Row>
      <Col span={6} style={{ backgroundColor: 'yellowgreen', textAlign: 'center' }}>
        <div onMouseOver={handleMouseOverElement} draggable
          onMouseLeave={handleMouseLeaveElement}
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
          style={{ backgroundColor: '#fff', cursor: 'move' }}>
          Drag Me
        </div>
      </Col>
      <Col span={18} style={{ backgroundColor: 'gray' }}>
        <div className='drop-area' >
          <FormGenerator elementsJson={deco} handleMouseOver={handleMouseOver} handleMouseLeave={handleMouseLeave} />
        </div>
      </Col>
    </Row>
  </Layout>)
}
