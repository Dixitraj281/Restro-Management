const { json } = require("body-parser");
const addResModel = require("../models/addResModel");
const restaurants = require("../models/addResModel");
const ordersModel = require("../models/ordersModel");
const moment = require("moment");

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

const getResData = async (req, res) => {
  const resName = req.params.resname;
  try {
    const restaurant = await restaurants.findOne({ res_name: resName });
    if (restaurant) {
      res.send(restaurant);
    } else {
      res.status(404).json({ error: "Restaurant not found" });
    }
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};
const getPreviousOrders = async (req, res) => {
  console.log("previous api has been hit");
  const previousDetails = [];
  const resName = req.params.id;
  console.log(resName);
  try {
    const orders = await ordersModel.find({ res_name: resName });
    if (orders) {
      orders.forEach((order) => {
        const todaysDate = new Date();
        const orderDate = order.date;
        console.log(orderDate.getFullYear(), orderDate.getMonth(), orderDate.getDay());
        console.log(todaysDate.getFullYear(), todaysDate.getMonth(), todaysDate.getDay());
        if (
          orderDate.getFullYear() <= todaysDate.getFullYear() &&
          orderDate.getMonth() <= todaysDate.getMonth() &&
          orderDate.getDay() < todaysDate.getDay()
        ) {
          previousDetails.push(order);
        }
      });
      res.send(previousDetails);
    } else {
      throw new Error("Restraunt does not exist!");
    }
  } catch (err) {
    console.log(err);
  }
};
const getTodayOrders = async (req, res) => {
  console.log("Todays api has been hit");
  const resName = req.params.id;
  console.log(resName);
  const todayOrders = [];
  try {
    const orders = await ordersModel.find({ res_name: resName });
    if (orders) {
      orders.forEach((order) => {
        const todaysDate = new Date();
        const orderDate = order.date;
        if (
          orderDate.getFullYear() <= todaysDate.getFullYear() &&
          orderDate.getMonth() <= todaysDate.getMonth() &&
          orderDate.getDay() == todaysDate.getDay()
        ) {
          todayOrders.push(order);
        }
      });
      res.send(todayOrders);
    } else {
      throw new Error("Restraunt with this name does not exist!");
    }
  } catch (err) {
    console.log(err);
  }
};
const getFutureOrders = async (req, res) => {
  console.log("future api has been hit");
  const resName = req.params.id;
  const futureOrder = [];
  try {
    const orders = await ordersModel.find({ res_name: resName });
    if (orders) {
      orders.forEach((order) => {
        const todaysDate = new Date();
        const orderDate = order.date;
      
        if (
          orderDate.getFullYear() <= todaysDate.getFullYear() &&
          orderDate.getMonth() <= todaysDate.getMonth() &&
          orderDate.getDay() > todaysDate.getDay()
        ) {
          futureOrder.push(order);
        }
      });
      res.send(futureOrder);
    } else {
      throw new Error("Restraunt with the given details does not exist!");
    }
  } catch (err) {
    console.log(err);
  }
};
const getAllOrders = async(req, res)=>{
    const resName = req.params.id;
    const allOrders = [];
    try{
     const orders = await ordersModel.find({res_name:resName});
      if(orders){
        res.send(orders);
      }
      else
      {
        throw new Error("Restraunt with this name does not exist")
      }
      res.send(allOrders);
    }
    catch(err){
      console.log(error);
      
    }
    


}
module.exports = {
  addRes,
  getResData,
  getPreviousOrders,
  getTodayOrders,
  getFutureOrders,
  getAllOrders
};
