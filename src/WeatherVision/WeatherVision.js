import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import config from '../ApiConfig';

//const loggedInUser = windows.sessionStorage.getItem('user');



class WeatherVision extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: [],
            userData: [],
            error: null
        }
    }

    static defaultProps = {
        match: { params: {} },
        //user: [],
    }


    setUser = user => {
        this.setState({
            user: [],
            userData: [],
            user_id: [],
            user_email: [],
            error: null,
        })
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

        const url = `${config.API_ENDPOINT}/loggedin/test`

        const userUrl = `${config.API_ENDPOINT}/loggedin/${userinfo.user_name}`


        const options = {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${config.API_KEY}`,
            }
        }

        const optionsPost = {
            method: 'POST',
            body: JSON.stringify(userinfo),
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bear ${config.API_KEY}`,
            }
        }

        fetch(userUrl, options)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                console.log(Object.keys(data).map(key => data[key].user_email))
                const user_Data = Object.keys(data).map(key => data[key])
                console.log('Weather Vision line 82: ' + user_Data)

                this.setState({
                    userData: data,
                })

            })
           


        // fetch(url, optionsPost)
        //     .then(res => res.json())
            
        //     .then(data => {
        //         this.setState({
        //             user_name: data,
        //             user_id: data,
        //             error: null,
        //         })
        //         console.log(data)
        //         const userEmail = Object.keys(data).map(key => data[key].user_id)
        //         console.log('User data is(101WV): ' + userEmail)
        //     })

        
 
    }


    render() {
 const loggedInUser = window.sessionStorage.getItem('user'); 
 const { user, userData } = this.state
// const showUserId = Object.keys(user).map(key => user[key].user_id)

const { user_email, user_name } = Object.keys(userData).map(key => userData[key])

console.log(user_email)


 
console.log('Weather Vision Line 105: ' + Object.keys(userData).map(key => userData[key].user_email))

const userEmail = Object.keys(userData).map(key => userData[key].user_email);
const userTest  = Object.keys(userData).map(key => userData[key].test);
const userNumber = Object.keys(userData).map(key => userData[key].number);
const userName = Object.keys(userData).map(key => userData[key].user_name);
const userId = Object.keys(userData).map(key => userData[key].user_id);



        return(
            <div>
                Weather Vision Component<br />
                <h3>Welcome {loggedInUser}</h3>
                <p>User E-mail: {userEmail}
                </p>
                <p>
                User Test: {userTest}
                </p>
                <p>
                User Number: {userNumber}
                </p>
                <p>
                User Name: {userName}
                </p>
                <p>
                User Id: {userId}
                </p>
                <Link to={'/login'} onClick={() => sessionStorage.clear()}>Logout</Link>

            </div>
        )
    }
}

export default WeatherVision