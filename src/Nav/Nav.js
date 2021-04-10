import react, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import './Nav.css';
import HamNav from './menu_ham.jpg';

class Nav extends Component {
    render() {
        return (
            <div className='navBox'>
                <ul className='menubg'>
                <div className='navShow-a'>
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
                <div className='navShow-b'>
                    <div className='menuBtn'>
                        <ul className='menubg'>
                            <li>Menu 
                                <span></span>
                                <span></span>
                                <span></span>
                            </li>

                        </ul>
                        
                    </div>
                    <div className='navShow-b1'>
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

                </div>
                </ul>
            </div>
        )
    }
}

export default Nav