import React, { useState } from "react";
import '/Users/ayushsolanki/Desktop/cloned/Restro-Management/Frontend/src/Body/Admins/adminStyle.css';

const AddMenuPhotos = () => {
  const [menuPhotos, setMenuPhotos] = useState([]);

  const handleOnAdd = (e) => {
    const files = document.getElementById("file_input_menu").files;
    const fileArray = Array.from(files);
    setMenuPhotos([...menuPhotos, ...fileArray]);
    document.getElementById("file_input_menu").value = "";
  };
  const handleOnUpload = () => {
    // not implemented yet
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
        <input type="file" id="file_input_menu"></input>
      <div className="Buttons">
          <button onClick={handleOnAdd}>Add + </button>
          <button onClick={handleOnDelete}>Delete</button>
          <button onClick={handleOnUpload}>Upload</button>
        </div>
      </div>
      <div class="ImagesShow">
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
