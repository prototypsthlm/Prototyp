import React, { useState, useEffect } from 'react';
import apiService from '../ApiService';
import './FileItem.css';
import moment from 'moment';
import pdfImg from '../images/pdf.png';
import jpgImg from '../images/jpg.png';
import xmlImg from '../images/xml.png';

function FileItem({ file, setFiles }) {
  // const [type, setType] = useState(null);

  // useEffect(() => {
  //   console.log(typeof file.filename);
  // }, []);

  async function handleClick() {
    await apiService.deleteFile({ id: file._id });
    setFiles((previous) => {
      const newArr = [...previous];
      const update = newArr.filter((item) => {
        return item._id !== file._id;
      });
      return update;
    });
  }

  return (
    <tr>
      <th>
        {file.filename.includes('.pdf') ? (
          <img src={pdfImg} className="type-icon" />
        ) : null}
        {file.filename.includes('.xml') ? (
          <img src={xmlImg} className="type-icon" />
        ) : null}
        {file.filename.includes('.jpg') ? (
          <img src={jpgImg} className="type-icon" />
        ) : null}
      </th>
      <th>{file.filename.slice(12)}</th>
      <th>{file.description}</th>
      <th>{file.uploadedBy}</th>
      <th>{moment(file.date).format('MMM Do YY')}</th>
      <th>
        <button onClick={handleClick}>DELETE</button>
      </th>
    </tr>
  );
}

export default FileItem;
