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
                            <label for='username'>
                                Username:
                            </label>
                            <input type='text' id='username' name='username' />
                        </div>
                        <div>
                            <label for='password'>
                                Password:
                            </label>
                            <input type='text' id='password' name='password' />
                        </div>
                        <div>
                            <input type='submit' value='Submit' />
                        </div>
                    </section>
                </form>
            </div>
        )
    }
}

export default Login