import React, { Component } from 'react';
import AuthService from '../AuthService/AuthService';
import TokenService from '../TokenService/TokenService';
import './Login.css';


class Login extends Component {

    static defaultProps = {
        onLoginSuccess: () => {}
    };

    state = { error: null};

    // handleLogin = () => {
    //     const { location, history } = this.props
    //     const destination = (location.state || {}).from || '/'
    //     history.push(destination)
    // }

    handSubmitTokenAuth = e => {
        e.preventDefault();
        console.log('HandSubmit Clicked')
        this.setState({ error: null });
        const { user_email, user_password } = e.target;

        AuthService.postLogin({
            user_email: user_email.value,
            user_password: user_password.value
        })
        .then(res => {
            user_email.value = "";
            user_password.value = "";
            TokenService.saveAuthToken(res.authToken);
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
                            <label htmlFor='user_email'>
                                E-Mail:
                            </label>
                            <input type='text' id='user_email' name='user_email' />
                        </div>
                        <div>
                            <label htmlFor='user_password'>
                                Password:
                            </label>
                            <input type='text' id='user_password' name='user_password' />
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