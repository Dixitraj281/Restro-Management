import React, { useState } from 'react'
import axios from 'axios';

const ImageUpload = () => {
    const[url, setUrl] = useState("");
    const uploadImage = async(e)=>{
        console.log(e);
        const files = e.target.files;
        const data = new FormData();
        data.append('file', files[0]);
        data.append('upload_preset', "res_img");
        data.append('cloud_name',"dzeaake8o");
        try {
            const res = await axios.post(
              `https://api.cloudinary.com/v1_1/dzeaake8o/image/upload`,data);
            setUrl(res.data.secure_url);
            console.log(url);
          } catch (err) {
            console.error(err);
          }
        
    }
  return (
    <>
    <h1>Upload Description Image</h1>
        <div className="UploadImage">
            <input type='file' onChange={uploadImage}></input>
            {url && <p>Uploaded</p>}
        </div>
    </>
  )
}

export default ImageUpload
