import react, { Component } from 'react';
import './Nav.css';

class Nav extends Component {
    render() {
        return (
            <nav>
                <div className='navbar centerit'>
                    Home Page | About | Demo | Login | Sign-Up
                </div>
                
            </nav>
        )
    }
}

export default Nav