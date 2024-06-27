import React from 'react';
import { useState } from 'react';

const AddResPhotos = (props) => {
  const [resPhotos, setResPhotos]= useState([]);

  const handleOnAdd = (e) => {
    const files = document.getElementById("file_input_res").files;
    const fileArray = Array.from(files);
    setResPhotos([...resPhotos, ...fileArray]);
    document.getElementById("file_input_res").value = "";
  };
  const handleOnUpload = () => {
    props.a([...resPhotos]);
    console.log("Restruant Phots have been uploaded successfully");
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
        <input type="file" id="file_input_res" className="input-field"></input>
      <div className="Buttons">
          <button onClick={handleOnAdd}>Add  </button>
          <button onClick={handleOnDelete}>Delete</button>
          <button onClick={handleOnUpload}>Confirm</button>
        </div>
      </div>
      <div className="ImagesShow">
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
