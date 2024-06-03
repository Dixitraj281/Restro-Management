import React, { useState } from 'react';
import './Header.css';
import { Link } from "react-router-dom";
import { SearchOutlined, UserOutlined } from '@ant-design/icons';
import { Input } from "antd";
// import Search from '../UserBody/Search-By-Date/Search.jsx';
import rms from '../Assets/rms.png'

function Header() {
    const [showSearch, setShowSearch] = useState(false);
    const [searchValue, setSearchValue] = useState("");

    const handleSearchChange = (e) => {
        setSearchValue(e.target.value);
    }

    const handleSearchClick = () => {
        setShowSearch(!showSearch);
    }

   

    return (
        <div className='header'>
            <Link to='/'>
                <img
                    className="header__icon"
                    src={rms}
                    alt=""
                />
            </Link>
           
            <div className='header__center'>
                <Input 
                    placeholder="Search"
                    prefix={<SearchOutlined />}
                    value={searchValue}
                    onChange={handleSearchChange}
                    onPressEnter={handleSearchClick}
                />
            </div>

            <div className='header__right'>
                {/* <Link to="/admin" className='user-admin-btn'>
                <Button className='host-button' type="primary" >Become a host</Button>
                </Link> */}
                <UserOutlined />
            </div>
        </div>
    )
}

export default Header;
