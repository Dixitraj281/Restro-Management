import React, { useState } from 'react'
import './ImageUpload.css'

const ImageUpload = (props) => {
    // const[url, setUrl] = useState("");
    const[image, setImage]= useState([]);
    const uploadImage = async(e)=>{
        
        const files = e.target.files;
        const data = Array.from(files);
        setImage([...image, files[0]]);
        // const data = new FormData();
        // data.append('file', files[0]);
        // data.append('upload_preset', "res_img");
        // data.append('cloud_name',"dzeaake8o");
        // try {
        //     const res = await axios.post(
        //       `https://api.cloudinary.com/v1_1/dzeaake8o/image/upload`,data);
        //     setUrl(res.data.secure_url);
        //     console.log(url);
        //   } catch (err) {
        //     console.error(err);
        //   }
        
    }
const handleOnClick = (e)=>{
  if(!image)return;
  props.a([...image]);
}

  return (
    <>
    <h1>Upload Description Image</h1>
        <div className="UploadImage">
            <input type='file' onChange={uploadImage} className="input-field"></input>
            {image && <p className='uploaded-text'>Uploaded</p>}
            <button onClick={handleOnClick} className="upload-Buttons">Confirm</button>
        </div>
    </>
  )
}

export default ImageUpload
