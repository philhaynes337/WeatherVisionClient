import react, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import './Nav.css';

class Nav extends Component {
    render() {
        return (
            <nav>
                <div className='navbar centerit'>
                    <Link to ='/'>Home Page</Link> | <Link to='/about'>About</Link> | <Link to='/weathervision'>Weather Vision</Link> | <Link to='/login'>Login</Link> | <Link to='/create'>Sign-Up</Link>
                </div>
                
            </nav>
        )
    }
}

export default Nav