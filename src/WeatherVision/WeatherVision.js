import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import config from '../ApiConfig';
import UserWeatherData from './files/User-Weather-Data';
import WvMenu from './files/WvMenu';
import ApiContext from '../ApiContext'

// Weather API Web Address
// https://avwx.docs.apiary.io/#

class WeatherVision extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userData: [],
            error: null,
            userEmail: [],
            userId: [],
            userName: [],
        }
    }

    
    componentDidMount() {

        const userinfo = {
            user_name: window.sessionStorage.getItem('user'),
            user_token: window.sessionStorage.getItem('TOKEN_KEY'),
        }

        const userUrl = `${config.API_ENDPOINT}/loggedin/${userinfo.user_name}`

        const options = {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${config.API_KEY}`,
            }
        }

        // const optionsPost = {
        //     method: 'POST',
        //     body: JSON.stringify(userinfo),
        //     headers: {
        //         'content-type': 'application/json',
        //         'Authorization': `Bear ${config.API_KEY}`,
        //     }
        // }

        fetch(userUrl, options)
            .then(res => res.json())
            .then(data => {
                
                let userEmail = data[0].user_email
                let userId = data[0].user_id
                let userName = data[0].user_name

                this.setState({
                    userData: data,
                    userEmail: userEmail,
                    userId: userId,
                    userName: userName,
                })              
            })
    }

    render() {

 const { userData, userEmail, userId, userName } = this.state

 window.sessionStorage.setItem('userEmail', userEmail)

        return(
            <div>
                <h2>Welcome {userName}!</h2>
                <WvMenu />
                <br />
                
                
                    <UserWeatherData userData={this.state.userData} />
                    
                
            </div>
        )
    }
}

export default WeatherVision