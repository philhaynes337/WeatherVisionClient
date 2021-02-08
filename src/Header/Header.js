import react, { Component } from 'react';
import './Header.css';
import Nav from '../Nav/Nav';

class Header extends Component {
    render() {
        return (
            <>
                <header>
                    <div className='centerit'>
                    <style>
                         @import url('https://fonts.googleapis.com/css2?family=Wallpoet&display=swap');
                    </style>
                        Weather Vision
                        </div>
                </header>

            <Nav />
            </>
        )
    }
}

export default Header