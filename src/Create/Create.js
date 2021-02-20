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
        const { firstname, lastname, username, zipcode, userpassword } = e.target

        const user = {
            username: username.value,
            userpassword: userpassword.value,
            zipcode: zipcode.value,
            firstname: firstname.value,
            lastname: lastname.value


        }

        console.log('User Information:' + user)

        this.setState({ error: null })

        fetch(`${ApiConfig.API_ENDPOINT}/users`, {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'content-type': 'application/json',
                'Authorization': 'Bearer 2f5e6320-6c04-11eb-9439-0242ac130002',
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
            username.value = ''
            userpassword.value = ''
            zipcode.value = ''
            firstname.value = ''
            lastname.value = ''

            this.context.addUser(data)

            console.log('Data is ' + data)
        })

        .catch (error => {
            console.log(error)
            this.setState({error})
        })
        this.props.history.push('/login')


    }

//handleChange(e) {
  //  this.setState({value: e.target.value});
//}



    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <section>
                        <div>
                            <label htmlFor='firstname'>
                                First Name:
                            </label>
                            <input type='text' name='firstname' id='firstname' defaultValue='First Name' required />
                        </div>
                        <div>
                            <label htmlFor='lastname'>
                                Last Name:
                            </label>
                            <input type='text' name='lastname' id='lastname' defaultValue='Last Name' required />
                        </div>
                        <div>
                            <label htmlFor='username'>
                                User Name:
                            </label>
                            <input type='text' name='username' id='username' defaultValue='User Name' required />
                        </div>
                        <div>
                            <label htmlFor='userpassword'>
                                Password:
                            </label>
                            <input type='text' name='userpassword' id='userpassword' defaultValue='Password' required />
                        </div>
                        <div>
                            <label htmlFor='zipcode'>
                                Zip Code:
                            </label>
                            <input type='text' name='zipcode' id='zipcode' defaultValue='76052' required />
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