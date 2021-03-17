import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import config from '../ApiConfig';
import UserWeatherData from './files/User-Weather-Data';
import Logout from './files/Logout';

//const loggedInUser = windows.sessionStorage.getItem('user');

// Weather API Web Address
// https://avwx.docs.apiary.io/#

class WeatherVision extends Component {
    constructor(props) {
        super(props)
        this.state = {
            //user: [],
            userData: [],
            error: null,
            userEmail: [],
            userId: [],
            userName: [],
        }

    }

    


    //     // fetch(`${config.API_ENDPOINT}/loggedin`, {
    //     //     method: 'POST',
    //     //     body: JSON.stringify(loggedUser),
    //     //     headers: {
    //     //         'content-type': 'application/json',
    //     //         'authorization': `Bearer ${config.API_KEY}`
    //     //     },
    //     // })
        

    componentDidMount() {

        const userinfo = {
            user_name: window.sessionStorage.getItem('user'),
            user_token: window.sessionStorage.getItem('TOKEN_KEY'),
        }

        //const url = `${config.API_ENDPOINT}/loggedin/test`

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
 const loggedInUser = window.sessionStorage.getItem('user'); 
 const { userData, userEmail, userId, userName } = this.state






//const userEmail = Object.keys(userData).map(key => userData[key].user_email);
//const userTest  = Object.keys(userData).map(key => userData[key].test);
//const userNumber = Object.keys(userData).map(key => userData[key].number);
//const userName = Object.keys(userData).map(key => userData[key].user_name);
//const userId = Object.keys(userData).map(key => userData[key].user_id);
//const dataMapped = Object.keys(userData).map(key => userData[key])







        return(
            <div>
                Weather Vision Component <Logout />
                <br />
                <h3>Welcome {userName}</h3>

                <p>
                    User E-mail: {userEmail}
                </p>
                <p>
                    User Name: {userName}
                </p>
                <p>
                     User Id: {userId}
                </p>
                    <Link to={'/login'} onClick={() => sessionStorage.clear()}>Logout</Link>
                
                    <UserWeatherData userData={this.state.userData} />
                    
                
            </div>
        )
    }
}

export default WeatherVision