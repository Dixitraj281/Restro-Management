import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Order.css';
import OrderNavbar from './OrderNavbar';
import AdminHeader from '../Admins/AdminHeader/AdminHeader';

const Order = ({ toggleSidebar, isSidebarOpen }) => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('http://localhost:4500/getallorders')
      .then(response => {
        setOrders(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching orders:', error);
        setLoading(false);
      });
  }, []);

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
                      <td>{order.id}</td>
                      <td>{order.Date}</td>
                      <td>{order.name}</td>
                      <td className={`Payment ${order.Payment.replace(' ', '-').toLowerCase()}`}>{order.Payment}</td>
                      <td>{order.amount}</td>
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
