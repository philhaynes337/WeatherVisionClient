import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logout from './Logout';

class WvMenu extends Component {

    render() {

        return(
            <div>
                <Link to={'/weathervision'}>View Observations</Link> | 
                <Link to={'/addobs'}> Add New</Link>
                <Logout />
            </div>
        )
    }
}

export default WvMenu