import React from 'react'
import MenuImages from './MenuImages.jsx';

export const Menu = ({menu}) => {
    return (
        <>
            <div>
                
                {menu.map((items) => (
                <div key={items.id} className="photocard">
                    
                    <div>
                    <img className="menucard-item photocard-item" src={items.src} alt={items.alt}/> 
                    </div>
                </div>
      ))}
            </div>
        </>
    )
}

export default Menu;