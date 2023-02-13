import React, { useRef, useState } from 'react';
import { EyeOutlined, DeleteOutlined } from '@ant-design/icons';
import { Modal, Upload } from 'antd';
import avatar from '../avatar.png';

const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

const SingleImgEle = (props) => {
  const [img, setImg] = useState(`url(${avatar})`);
  const labelRef = useRef('labelRef')
  const { type, placeholder, name } = props; 

  const handleUploadFile = async ({target = {}}) => {
    const link = URL.createObjectURL(target.files[0]);
    labelRef.current.style.backgroundImage = `url(${link})`;
  }

  return (
    <label ref={labelRef} style={{ gridArea: name, backgroundImage: `url(${avatar})`, backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat', backgroundSize: 'contain', borderRadius: '5px', backgroundColor: '#f0f0f0' }}>
      <input type='file' style={{height:"0", width:'0'}} onChange={handleUploadFile}  />
    </label>
  );
};

export default SingleImgEle;