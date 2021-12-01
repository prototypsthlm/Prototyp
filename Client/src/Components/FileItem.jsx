import React from 'react';

function FileItem({ file }) {
  return (
    <tr>
      <th>hey</th>
      <th>{file.filename}</th>
      <th>{file.description}</th>
      <th>{file.uploadedBy}</th>
      <th>{file.date}</th>
    </tr>
  );
}

export default FileItem;
