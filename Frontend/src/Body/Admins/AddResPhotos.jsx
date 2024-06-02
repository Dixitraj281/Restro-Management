import React from 'react';
import { useState } from 'react';

const AddResPhotos = () => {
  const [resPhotos, setResPhotos]= useState([]);

  const handleOnAdd = (e) => {
    const files = document.getElementById("file_input_res").files;
    const fileArray = Array.from(files);
    setResPhotos([...resPhotos, ...fileArray]);
    document.getElementById("file_input_res").value = "";
  };
  const handleOnUpload = () => {
    // not implemented yet
  };
  const handleOnDelete = () => {
    const newresPhotos = resPhotos;
    newresPhotos.pop();
    setResPhotos([...newresPhotos]);
  };
  

  return (
    <>
      <div className="menuList">
      <h1>Add Restruant Photos</h1>
        <input type="file" id="file_input_res"></input>
      <div className="Buttons">
          <button onClick={handleOnAdd}>Add + </button>
          <button onClick={handleOnDelete}>Delete</button>
          <button onClick={handleOnUpload}>Upload</button>
        </div>
      </div>
      <div class="ImagesShow">
        {resPhotos.map((image, index) => (
          <img
            className="Images"
            key={index}
            src={URL.createObjectURL(image)}
            alt={`Upload Preview ${index}`}
            style={{ width: "150px", height: "150px", objectFit: "cover" }}
          />
        ))}
      </div>

    </>
  )
}

export default AddResPhotos;
