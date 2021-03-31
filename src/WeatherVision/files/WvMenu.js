import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logout from './Logout';

class WvMenu extends Component {

    render() {

        return(
            <div>
                <Link to={'/weathervision'}>Observations</Link> | 
                <Link to={'/addobs'}> Add</Link>
                <Logout />
            </div>
        )
    }
}

export default WvMenu