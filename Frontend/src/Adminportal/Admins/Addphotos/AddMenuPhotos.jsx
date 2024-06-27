import React, { useState } from "react";

import './adminStyle.css';


const AddMenuPhotos = (props) => {
  const [menuPhotos, setMenuPhotos] = useState([]);

  const handleOnAdd = (e) => {
    const files = document.getElementById("file_input_menu").files;
    const fileArray = Array.from(files);
    setMenuPhotos([...menuPhotos, ...fileArray]);
    document.getElementById("file_input_menu").value = "";
  };
  const handleOnUpload = () => {
    
   props.a([...menuPhotos]);
   console.log("Menu phots have been uploaded successfully");

  };
  const handleOnDelete = () => {
    const newmenuPhotos = menuPhotos;
    newmenuPhotos.pop();
    setMenuPhotos([...newmenuPhotos]);
  };

  return (
    <>
      <div className="menuList">
      <h1>Add Menu Photos</h1>
        <input type="file" id="file_input_menu" className="input-field"></input>
      <div className="Buttons">
          <button onClick={handleOnAdd}>Add  </button>
          <button onClick={handleOnDelete}>Delete</button>
          <button onClick={handleOnUpload}>Confirm</button>
        </div>
      </div>
      <div className="ImagesShow">
        {menuPhotos.map((image, index) => (
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
  );
};

export default AddMenuPhotos;
