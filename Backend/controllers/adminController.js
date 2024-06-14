const addResModel = require("../models/addResModel");
const restaurants = require('../models/addResModel');


const addRes = async (req, res) => {
  console.log(req.body);
  try {
    const newRes = new addResModel({
      res_name: req.body.hotelName,
      des: req.body.description,
      desImage: req.body.desUrls,
      cusines: req.body.cusines,
      address: req.body.address,
      moreInfo: req.body.moreInfo,
      foodPhotos: req.body.foodUrls,
      menuPhotos: req.body.menuUrls,
      resPhotos: req.body.resUrls,
      openTime: req.body.openTime,
      closeTime: req.body.closeTime,
      tableCap: req.body.tableCap,
    });
    const newResData = await newRes.save();
    if (newResData) {
      console.log("Data Successfully saved in database");
    } else {
      console.log("Storage Failed");
    }
  } catch (err) {
    console.log("Failed");
  }
};

const getResData = async(req, res)=>{
   
    const resName = req.params.resname;
    try {
     
      const restaurant = await restaurants.findOne({ res_name: resName });
      if (restaurant) {
        res.send(restaurant);
      } else {
        res.status(404).json({ error: 'Restaurant not found' });
      }
    } catch (err) {
      res.status(500).json({ error: 'Server error' });
    }
}

module.exports = {
  addRes,
  getResData
};
