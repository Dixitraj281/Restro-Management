import React, { useState } from 'react';
import './Order.css';
import Pagination from './Pagination';
import OrderNavbar from './OrderNavbar';
import AdminHeader from '../Admins/AdminHeader/AdminHeader';

const orders = [
  { id: '#1566878', Date: '2023-06-15', name: 'Sadegh Saadi', Payment: 'Credit Card', amount: '31.00 USD' },
  { id: '#1566879', Date: '2023-04-11', name: 'Armita Farhadian', Payment: 'Paypal', amount: '25.00 USD' },
  { id: '#1566880', Date: '2023-05-17', name: 'Mahsa Shakiba', Payment: 'Credit Card', amount: '15.00 USD' },
  { id: '#1566881', Date: '2023-05-05', name: 'Sina Salari', Payment: 'Credit Card', amount: '65.00 USD' },
  { id: '#1566882', Date: '2023-08-23', name: 'Shahrzad Omranzadeh', Payment: 'Credit Card', amount: '156.00 USD' },
  { id: '#1566883', Date: '2023-12-11', name: 'Reza Marmolak', Payment: 'Paypal', amount: '5.00 USD' },
  { id: '#1566884', Date: '2023-04-08', name: 'Mehrnaz Hatami', Payment: 'Upi', amount: '452.00 USD' },
];

const Order = ({ toggleSidebar, isSidebarOpen }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5; // Assume we have 5 pages for simplicity

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

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
          </div>
        </div>
        <div className='pagination'>
          <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
        </div>
      </div>
    </div>
  );
};

export default Order;
