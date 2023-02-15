import React from 'react'
import { Col, Layout, Row } from 'antd';
import FormGenerator from '../FormGenerator/FormGenerator';
import formConfig from '../formConfig.json';

export default function PlayGround() {

    const generateView = (formConfig) => {
      const elements = formConfig.elements;
      let xR = Array.from({length: formConfig.rows}, () => []);
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
      console.log('Start',event);
    }

    const handleDragEnd = (event) => {
        console.log('End',event);

    }

    const handleMouseOver = (event) => {
        const box = event.target.getBoundingClientRect();
        const yy = event.clientY;
        const xx = event.clientX;
        // console.log('onMouseUp',event.target.style.gridArea.split('/').at(0));
        const offsetY = yy - box.top - box.height / 2
        const offsetX = xx - box.left - box.width / 2
        console.log('Y : ', offsetY);
        console.log('X : ', offsetX);

    }
    const deco = window.structuredClone(formConfig);
    deco.view = generateView(formConfig);
    return (<Layout >
        <Row>
            <Col span={6} style={{backgroundColor: 'yellowgreen', textAlign: 'center'}}>
                <div onMouseOver={handleMouseOverElement} draggable
                onMouseLeave={handleMouseLeaveElement}
                onDragStart={handleDragStart} onDragEnd={handleDragEnd} 
                 style={{backgroundColor: '#fff', cursor: 'move'}}>
                    Drag Me
                </div>
            </Col>
            <Col span={18} style={{backgroundColor: 'gray'}}>
              <div className='drop-area' >
              <FormGenerator elementsJson={deco} handleMouseOver={handleMouseOver} />
              </div>
            </Col>
        </Row>
    </Layout>)
}
