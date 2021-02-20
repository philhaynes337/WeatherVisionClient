import React, { Component } from 'react';
import './Login.css';

class Login extends Component {
    render() {
        return (
            <div>
                <form>
                    <section>
                        Login:
                        <div>
                            <label htmlFor='username'>
                                Username:
                            </label>
                            <input type='text' id='username' name='username' />
                        </div>
                        <div>
                            <label htmlFor='password'>
                                Password:
                            </label>
                            <input type='text' id='password' name='password' />
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