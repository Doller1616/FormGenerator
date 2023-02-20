import React, { useEffect, useState } from 'react'
import { Col, Layout, Row } from 'antd';
import FormGenerator from '../FormGenerator/FormGenerator';
import formConfigJSON from '../formConfig.json';
import { elements, properties, sides } from '../constants';
const { TEXTFIELD } = elements;
const { Bottom, LEFT, RIGHT, TOP } = sides;

export default function PlayGround() {
  const cssprop = ['border-top', 'border-right', 'border-bottom', 'border-left'];
  const [formConfig, setFormConfig] = useState(formConfigJSON)
  let dragFinish = {
    info: null,
    target: <a />,
    side: ''
  }

  useEffect(() => {
    const deco = window.structuredClone(formConfig);
    deco.view = generateView(formConfig);
    setFormConfig(deco)
  }, [])


  const generateView = (formConfig) => {
    const elements = formConfig.elements;
    let xR = Array.from({ length: formConfig.rows }, () => []);
    elements.forEach(element => {
      element.row.forEach((r) => {
        element.col.forEach((c) => {
          xR[r][c] = element.name;
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

  const handleDragEnd = ({ target }) => {
    cssprop.forEach((e) => dragFinish.target.style.removeProperty(e));
    (dragFinish.side === LEFT) && addElementInLeft(dragFinish, target);
  }

  const addElementInLeft = ({ info }, target) => {
    const element = target.getAttribute('value');
    const clone = window.structuredClone(formConfig);
    const newElement = properties(element);
    const [Ist] = info.col || [];
    // console.log('first', Ist);
    if (Ist == 0) {
      // to reset column of all element in the JSON 
      clone.elements.forEach((comp) => {
        comp.col = comp.col.map((pos) => (pos + 1));
      });
      // to create new element
      newElement.col = [0];
      newElement.row = info.row;
      clone.columns = clone.columns + 1;
    }
    else {
      clone.elements.forEach((comp) => {
        const indexPos = comp.col.indexOf((Ist - 1));
        if (indexPos > -1) {
          comp.col = [...comp.col, (comp.col.at(-1) + 1)];
        } else {
          const [Ist] = comp.col
          if (Ist > 0) {
            comp.col = comp.col.map((v) => v + 1);
          }
        }
      });


      newElement.col = [Ist];
      newElement.row = info.row;
      clone.columns = clone.columns + 1;
    }
    clone.elements.push(newElement);
    clone.view = generateView(clone)
    console.log(clone);
    setFormConfig(clone)
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
      dragFinish.side = LEFT;
      dragFinish.info = args;
    }// Column right
    else if (Right) {
      event.target.style.borderRight = '4px solid red';
      dragFinish.side = RIGHT;
      dragFinish.info = args;
    } // Row top
    else if (Top) {
      event.target.style.borderTop = '4px solid red';
      dragFinish.side = TOP;
      dragFinish.info = args;
    } // Bottom
    else if (Bottom) {
      event.target.style.borderBottom = '4px solid red';
      dragFinish.side = Bottom;
      dragFinish.info = args;
    } else {
      dragFinish.info = null;
    }
    dragFinish.target = event.target;
  }

  const handleMouseLeave = (event, args) => {
    cssprop.forEach((e) => event.target.style.removeProperty(e));
  }

  return (<Layout >
    <Row>
      <Col span={6} style={{ backgroundColor: 'yellowgreen', textAlign: 'center' }}>
        <div value={TEXTFIELD}
          onMouseOver={handleMouseOverElement} draggable
          onMouseLeave={handleMouseLeaveElement}
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
          style={{ backgroundColor: '#fff', cursor: 'move' }}>
          Drag Me
        </div>
      </Col>
      <Col span={18} style={{ backgroundColor: 'gray' }}>
        <div className='drop-area' >
          <FormGenerator elementsJson={formConfig} handleMouseOver={handleMouseOver} handleMouseLeave={handleMouseLeave} />
        </div>
      </Col>
    </Row>
  </Layout>)
}
