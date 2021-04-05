import react, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import './Nav.css';

class Nav extends Component {
    render() {
        return (
            <div>
                <nav>
                    <ul>
                        <li><Link to ='/'>Home Page</Link></li>  
                        <li><Link to='/about'>About</Link></li> 
                        <li><Link to='/weathervision'>Weather Vision</Link></li>                      
                        <li><Link to='/create'>Sign-Up</Link></li> 
                        <li className='nav-b'><Link to='/login'>Login</Link></li> 
                    </ul>
                    
                </nav>
            </div>
        )
    }
}

export default Nav