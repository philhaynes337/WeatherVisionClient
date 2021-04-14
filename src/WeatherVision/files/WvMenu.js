import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logout from './Logout';
import './css/wvMenu.css'

class WvMenu extends Component {

    render() {

        return(
            <div className='wvMenuText'>
                <ul>
                    <li><Link to={'/weathervision'}>View Observations</Link></li>  
                    <li><Link to={'/addobs'}> Add New</Link></li>
                    <li className='wvLogout'><Logout /></li>
                </ul>
            </div>
        )
    }
}

export default WvMenu