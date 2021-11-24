import React from 'react';
import './menustyle.css';
import {Link} from 'react-router-dom';
const Menu = () => {
    return (
        <div className="menustyle">
            <ul>
                <li> <Link to="/"> Home </Link></li>
                <li> <Link to="About"> About </Link></li>
                <li><Link to="Contact"> Contact</Link></li>
                <li><Link to="Overview"> Contact</Link></li>
            </ul>
        </div>
    )
}
 

export default Menu;