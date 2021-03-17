import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './css/Logout.css'

class Logout extends Component {


render() {

    return(
            <div>
                <Link to={'/login'} onClick={() => sessionStorage.clear()}>Logout</Link>
            </div>
        )
    }
}

export default Logout