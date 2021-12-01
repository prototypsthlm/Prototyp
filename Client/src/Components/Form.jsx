import React, { useState } from 'react';
import './Form.css';
import apiService from '../ApiService';

const initialState = {
  filename: '',
  description: '',
  uploadedBy: '',
  date: new Date(),
};

function Form({ setShowForm }) {
  const [state, setState] = useState(initialState);

  function handleChange(e) {
    const { name, value } = e.target;
    setState((previous) => ({
      ...previous,
      [name]: value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    await apiService.postFile(state);
    setState(initialState);
    setShowForm(false);
  }

  return (
    <div className="form-container">
      <h1>Add a file !</h1>
      <form onSubmit={handleSubmit}>
        <input
          required
          type="file"
          accept=".pdf, .xml, .jpeg"
          onChange={handleChange}
          name="filename"
          value={state.filename}
        />
        <input
          required
          type="text"
          placeholder="description"
          name="description"
          value={state.description}
          onChange={handleChange}
        />
        <input
          required
          type="text"
          placeholder="uploader name"
          name="uploadedBy"
          value={state.uploadedBy}
          onChange={handleChange}
        />
        <button className="add-btn">Add File</button>
      </form>
    </div>
  );
}

export default Form;
