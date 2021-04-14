import React, { Component } from 'react';
import WvMenu from './WvMenu';
import config from '../../ApiConfig';
import './css/DelObs.css';

class DeleteObs extends Component {
    constructor(props) {
        super(props)
        this.state = {
            error: null,
            userEmail: [],
            deleted: '',
            id: [],
        }
    }




    DeleteObsBtn = e => {
        e.preventDefault();
        //const { id } = e.target;

        const data = {
            id: this.props.id,
            user: window.sessionStorage.getItem('user'),
            user_email: window.sessionStorage.getItem('userEmail'),
        }
        console.log(data)

        const userinfo = window.sessionStorage.getItem('user')

        const userUrl = `${config.API_ENDPOINT}/loggedin/${userinfo}/deleteobs`

        const options = {
            method: 'DELETE',
            body: JSON.stringify(data),
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${config.API_KEY}`
            }
        }

        fetch(userUrl, options)
        .then(res => {
            this.setState({
                deleted: 'Deleting Observation'
            })
            if (!res.ok) {
                return res.json().then(error => {
                    throw error
                })
            }
          
        })
        .catch (error => {
            console.log('error at Delete Obs Line 52')
            this.setState({
                deleted: 'Problem Deleting Observation '
            })
        })
        this.setState({
            deleted: 'Observation Deleted'
        })
        window.location.reload(false)
    }

    render() {

        const deletedStatus = this.state.deleted

        return(

            <div className='delText'>

                {deletedStatus}
                <form onSubmit={this.DeleteObsBtn}>

                    <div className='del-1'>
                        <button className='delbtn' type='submit'>Delete</button>
                    </div>

                </form>
            </div>
        )
    }
}

export default DeleteObs