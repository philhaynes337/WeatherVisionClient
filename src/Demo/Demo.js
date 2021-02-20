import React, { Component } from 'react';
import DemoMenu from '../DemoMenu/DemoMenu';
import './Demo.css';

class Demo extends Component {
    render() {
        return (
            <div>
                Demo Component
                <DemoMenu />
            </div>
        )
    }
}

export default Demo