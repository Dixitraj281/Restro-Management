import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer>
      <section className="footer-body">
        <div className="get-connected">
          <span>Get connected with us:</span>
        </div>
      </section>

      <section className="section-2">
        <div className="container">
          <div className="grid">
            <div className="col-span-1">
                <h4>Restaurants Management System</h4>
              <p>Since 1963</p>
            </div>

            <div className="col-span-1">
              <h6>Contact</h6>
              <ul>
                <li className="text-center">
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, atque?
                </li>
              </ul>
            </div>
            <div className="col-span-1">
              <h6>Email</h6>
              <ul>
                <li>
                  xyz@gmail.com
                </li>
                <li>
                  xyz@gmail.com
                </li>
              </ul>
            </div>
            <div className="col-span-1">
              <h6>Contact</h6>
              <ul>
                <li>                  
                  +91 00000 00000
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-gray-500">
        <div className="container text-center">
          Copyright © {new Date().getFullYear()}
          <a href="#RMS" className="text-secondary font-bold"> Restaurants Management System</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
