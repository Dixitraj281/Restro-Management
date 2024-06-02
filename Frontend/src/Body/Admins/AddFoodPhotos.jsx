import React, { useState } from "react";
import "/Users/ayushsolanki/Desktop/cloned/Restro-Management/Frontend/src/Body/Admins/adminStyle.css";

const AddFoodPhotos = () => {
  const [foodPhotos, setfoodPhotos] = useState([]);
  const handleOnAdd = (e) => {
    const files = document.getElementById("file_input").files;
    const fileArray = Array.from(files);
    setfoodPhotos([...foodPhotos, ...fileArray]);
    document.getElementById("file_input").value = "";
  };
  const handleOnUpload = () => {
    // not implemented yet
  };
  const handleOnDelete = () => {
    const newfoodPhotos = foodPhotos;
    newfoodPhotos.pop();
    setfoodPhotos([...newfoodPhotos]);
  };
  return (
    <>
      <div className="foodList">
        <h1>Add Food Photos</h1>
        <input type="file" id="file_input"></input>
        <div className="Buttons">
          <button onClick={handleOnAdd}>Add + </button>
          <button onClick={handleOnDelete}>Delete</button>
          <button onClick={handleOnUpload}>Upload</button>
        </div>
        {/* <button onClick={handleOnUpload}>Upload </button> */}
      </div>
      <div class="ImagesShow">
        {foodPhotos.map((image, index) => (
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

export default AddFoodPhotos;
