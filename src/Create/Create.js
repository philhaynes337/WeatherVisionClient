import React, { Component } from 'react';
import './Create.css';

class Create extends Component {
    render() {
        return (
            <div>
                <form>
                    <section>
                        <div>
                            <label for='firstname'>
                                First Name:
                            </label>
                            <input type='text' name='firstname' id='firstname' value='First Name' />
                        </div>
                        <div>
                            <label for='lastname'>
                                Last Name:
                            </label>
                            <input type='text' name='lastname' id='lastname' value='Last Name' />
                        </div>
                        <div>
                            <label for='username'>
                                User Name:
                            </label>
                            <input type='text' name='username' id='username' value='User Name' />
                        </div>
                        <div>
                            <label for='zipcode'>
                                Zip Code:
                            </label>
                            <input type='text' name='zipcode' id='zipcode' value='Zip Code' />
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

export default Create