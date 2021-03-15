import React, { Component } from 'react';
import AuthService from '../AuthService/AuthService';
import TokenService from '../TokenService/TokenService';
import './Login.css';


class Login extends Component {

    static defaultProps = {
        onLoginSuccess: () => {}
    };

    state = { 
        error: null,
        user_name: [],
    };


    handSubmitTokenAuth = e => {
        e.preventDefault();

        sessionStorage.clear(); 

        this.setState({ 
            error: null,
           
        });

        const { user_name, user_password } = e.target;

        AuthService.postLogin({
            user_name: user_name.value,
            user_password: user_password.value
        })
        .then(res => {
            
            user_password.value = "";
            TokenService.saveAuthToken(res.authToken);
            window.sessionStorage.setItem('user', user_name.value);
            
            this.props.onLoginSuccess();
            
        })
        .catch(res => {
            this.setState({
                error: res.error
            });
        });
    }




    render() {
        const { error } = this.state;
        return (
            <div>
                <form onSubmit={this.handSubmitTokenAuth}>
                    <section>
                        Login:
                        <div>
                            <label htmlFor='user_name'>
                                User Name:
                            </label>
                            <input type='text' id='user_name' name='user_name' />
                        </div>
                        <div>
                            <label htmlFor='user_password'>
                                Password:
                            </label>
                            <input type='password' id='user_password' name='user_password' />
                        </div>
                        <div>
                        <button type='submit'>Login</button>
                        </div>
                    </section>
                </form>
            </div>
        )
    }
}

export default Login