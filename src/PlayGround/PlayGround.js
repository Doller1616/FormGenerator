import React from 'react'
import { Col, Layout, Row } from 'antd';
import FormGenerator from '../FormGenerator/FormGenerator';
import formConfig from '../formConfig.json';

export default function PlayGround() {

    
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

    const handleDragOver = (event) => {
        const { width, height } = event.target.getBoundingClientRect() || {};
        console.log('onMouseUp',event.target.style.gridArea.split('/').at(0));
        console.log(`Width: ${width}, Height: ${height}`);

    }

    const handleDragEnd = (event) => {
        console.log('End',event);

    }

    const handleMouseOver = (event) => {
        const { width, height } = event.target.getBoundingClientRect() || {};
        console.log('onMouseUp',event.target.style.gridArea.split('/').at(0));
        console.log(`Width: ${width}, Height: ${height}`);
        // console.log(event.target.getBoundingClientRect());
    }

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
              <div className='drop-area' onDragOver={handleMouseOver} >
              <FormGenerator elementsJson={formConfig} />
              </div>
            </Col>
        </Row>
    </Layout>)
}
