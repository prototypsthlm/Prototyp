import React from 'react';
import apiService from '../ApiService';

function FileItem({ file, setFiles }) {
  async function handleClick() {
    console.log('button clicked to delete');
    await apiService.deleteFile({ id: file._id });
    setFiles((previous) => {
      const newArr = [...previous];
      const update = newArr.filter((item) => {
        return item._id !== file._id;
      });
      return update;
    });
  }

  // //send back from post request
  //   const filteredEvents = userData.comingEvents.filter(function (event) {
  //     return event._id !== jamid;
  //   });
  //   setUserData((previous) => {
  //     return { ...previous, comingEvents: filteredEvents };
  //   });
  // }

  return (
    <tr>
      <th>hey</th>
      <th>{file.filename.slice(12)}</th>
      <th>{file.description}</th>
      <th>{file.uploadedBy}</th>
      <th>{file.date}</th>
      <th>
        <button onClick={handleClick}>DELETE</button>
      </th>
    </tr>
  );
}

export default FileItem;
