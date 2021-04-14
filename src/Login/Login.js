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

                <p>
                    {error}
                </p>
                <form onSubmit={this.handSubmitTokenAuth}>
                    <section className='login'>
                        
                        <div className='login-r'>
                            <div className='login-c'>

                                    <label htmlFor='user_name'>
                                        User Name:
                                    </label>
                            </div>
                            <div className='login-c'>
                            <input type='text' id='user_name' name='user_name' placeholder='User Name' />

                            </div>
                        </div>
                        <div className='login-r'>
                            <div className='login-c'>
                                    <label htmlFor='user_password'>
                                        Password:
                                    </label>
                            </div>
                        <div className='login-c'>

                            <input type='password' id='user_password' name='user_password' placeholder='Password' />
                        </div>
                        </div>
                        <div className='login-r'>
                        <div className='login-c'></div>
                            <div className='login-c'>
                                <button type='submit'>Login</button>
                            </div>
                            </div>
                    </section>
                </form>
            </div>
        )
    }
}

export default Login