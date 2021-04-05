import React, { Component } from 'react';
import './Home.css'
import HomePic from './homepic.jpg';

class Home extends Component {
    render() {
        return (
            <div>
                <section>
                    <img src={HomePic} alt='Night Sky' />
                <p>Welcome to Weather Vision where you bring the weather!</p>
                <p>We are based out of Fort Worth, Texas and started in the year 2020. Weather Vision was created
                    to allow the user to log their observations. The style of observations is set up the same way
                    airports report their weather. We are also setup so you, the user, can input how you see fit.
                </p>
                </section>
            </div>
        )
    }
}

export default Home