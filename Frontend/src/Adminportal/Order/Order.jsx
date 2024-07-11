import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Order.css';
import OrderNavbar from './OrderNavbar';
import AdminHeader from '../Admins/AdminHeader/AdminHeader';

const Order = ({ toggleSidebar, isSidebarOpen }) => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [profileDetails, setProfileDetails] = useState({
    username:"",
    designation: "Admin",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    resOwned:"" 
  });
  const getAdminData =()=>{
    const adminData = JSON.parse(localStorage.getItem('adminProfile'));
    console.log(adminData);
    
    
    setProfileDetails({
      username:`${adminData.first_name} ${adminData.last_name}`,
      designation: "User",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      resOwned:"Haldirams"
    });
  }
  useEffect(()=>{
    getAdminData();
    getAllorders();

  },[]);
  useEffect(()=>{
      getAllorders();
  },[profileDetails])


    const getAllorders = async()=>{
      console.log("entered into getAllOrderFrontendApi");
      console.log(`${profileDetails.resOwned}`);
      try{
        
        const response = await fetch(`http://localhost:4500/admin/getallorders/${profileDetails.resOwned}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          }
        });
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
    
        const data = await response.json();
        console.log("data came");
        setOrders(data);
        setLoading(false);
        console.log(data);
        
      } catch (err) {
        console.log(err);
      }

    }

 
  
  
  return (
    <div className='order-topcontainer'>
      <div className='order-main'>
        <div className={`content ${isSidebarOpen ? 'with-sidebar' : 'full-width'}`}>
          <AdminHeader toggleSidebar={toggleSidebar} />
          <OrderNavbar />
          <div className="order-table">
            <div className="table-header">
              <h2 className='order-table-heading'>Order Activity</h2>
            </div>
            {loading ? (
              <p>Loading...</p>
            ) : orders.length === 0 ? (
              <p className='no-data'>No data available.</p>
            ) : (
              <table>
                <thead>
                  <tr>
                    <th>Order Code ↑</th>
                    <th>Client Code</th>
                    <th>Name</th>
                    <th>Payment</th>
                    <th>Order Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((order, index) => (
                    <tr key={index}>
                      <td>{order.userName}</td>
                      <td>{order.date}</td>
                      <td>{order.timing}</td>
                      {/* <td className={`Payment ${order.Payment.replace(' ', '-').toLowerCase()}`}>{order.Payment}</td>
                      <td>{order.amount}</td> */}
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
