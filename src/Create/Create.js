import React, { Component } from 'react';
import './Create.css';
import ApiContext from '../ApiContext';
import ApiConfig from '../ApiConfig';


class Create extends Component {
    static contextType = ApiContext;
        state = {
            error: null
        };

    handleSubmit = e => {
        e.preventDefault();
        const { user_email, user_name, user_password } = e.target

        const user = {
            user_email: user_email.value,
            user_password: user_password.value,
            user_name: user_name.value,



        }


        this.setState({ error: null })
       

        fetch(`${ApiConfig.API_ENDPOINT}/register`, {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${ApiConfig.API_KEY}`,
            }
        })

        .then(res => {
            if (!res.ok) {
                return res.json().then(error => {
                    throw error
                })
            }
            return res.json()
        })

        .then (data => {
            user_name.value = ''
            user_password.value = ''
            user_email.value = ''

            //this.context.addUser(data)

            //console.log('Data is ' + data)
        })

        .catch (error => {
            //console.log(error)
            this.setState({error})
        })
        this.props.history.push('/login')


    }



    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <section>
                        <div>
                            <label htmlFor='user_email'>
                                E-Mail:
                            </label>
                            <input type='text' name='user_email' id='user_email' defaultValue='E-Mail' required />
                        </div>
                       
                        <div>
                            <label htmlFor='user_name'>
                                User Name:
                            </label>
                            <input type='text' name='user_name' id='user_name' defaultValue='User Name' required />
                        </div>
                        <div>
                            <label htmlFor='user_password'>
                                Password:
                            </label>
                            <input type='text' name='user_password' id='user_password' defaultValue='Password' required />
                        </div>
                        <div>
                            <button type='submit'>Create User</button>
                        </div>
                    </section>
                </form>
            </div>
        )

    }
}

export default Create