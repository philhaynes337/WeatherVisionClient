import React, { Component } from 'react';
import WvMenu from './WvMenu';
import config from '../../ApiConfig';
import './css/EditObs.css'

class EditObs extends Component {
    constructor(props) {
        super(props)
        this.state = {
            error: null,
            updated: '',
            display: 'noShow',
            updateButton: 'show',
            buttonText: 'Update',
            obs_date_time: [],
            icao: [],
            wind: [],
        }
    }

    UpdateObsBtnStage = e  => {
        e.preventDefault();
        this.setState({
            display: 'show',
            updateButton: 'noShow',
            buttonText: 'Submit'
        })
    }

    UpdateObsBtn = e => {
        e.preventDefault();
        this.setState({
            display: 'show',
            buttonText: 'Submit'
        })
        const { obs_date_time, icao, wind, vis, clouds, wx, tmp, dp, remarks } = e.target

        const data = {
            id: this.props.id,
            obs_date_time: obs_date_time.value,
            icao: icao.value,
            wind: wind.value,
            vis: vis.value,
            clouds: clouds.value,
            wx: wx.value,
            tmp: tmp.value,
            dp: dp.value,
            remarks: remarks.value,
            user: window.sessionStorage.getItem('user')
        }
        console.log(data)

        const userinfo = window.sessionStorage.getItem('user')
        const userUrl= `${config.API_ENDPOINT}/loggedin/${userinfo}/editobs`

        const options = {
            method: 'PATCH',
            body: JSON.stringify(data),
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${config.API_KEY}`
            }
        }

        fetch(userUrl, options)
        .then(res => {
            this.setState({
                updated: 'Updating Observation...'
            })
            if (!res.ok) {
                return res.json().then(error => {
                    throw error
                })
            }
        })
        .catch (error => {
            console.log(error)
            this.setState({
                updated: 'Problem Updating Observation'
            })
        })
        this.setState({
            updated: 'Observation Updated',
            updateButton: 'show',
            display: 'noShow'
        })
        window.location.reload(false);
    }

    handleCancel() {
        this.setState({
            display:'noShow'
        })
    }

    render() {

const showUpdateTable = this.state.display;
const showButtonText = this.state.buttonText;
const showUpdateButton = this.state.updateButton;




        return(
            <div>
                {this.state.updated}
               <form onSubmit={this.UpdateObsBtn}>
                    <div className={showUpdateTable}>
                        <div>
                                Date/Time:
                                <input type='text' name='obs_date_time' id='obs_date_time' />
                        </div>
                        <div>
                                Location:
                                <input type='text' name='icao' id='icao' />
                        </div>
                        <div>
                                Wind:
                                <input type='text' name='wind' id='wind' />
                        </div>
                        <div>
                                Visibility:
                                <input type='text' name='vis' id='vis' />
                         </div>
                         <div>
                                Clouds:
                                <input type='text' name='clouds' id='clouds' />
                         </div>
                         <div>
                                Weather:
                                <input type='text' name='wx' id='wx' />
                         </div>
                         <div>
                                Temperature:
                                <input type='text' name='tmp' id='tmp' />
                         </div>
                         <div>
                                Dew Point:
                                <input type='text' name='dp' id='dp' />
                         </div>
                         <div>
                                Remarks:
                                <input type='text' name='remarks' id='remarks' />
                         </div>
                        <div>
                                <button type='submit'>Submit to Server</button>
                                <button onClick={this.handleCancel}>Cancel</button>
                        </div>
                        </div>
                   </form>
                  
                   <div className={showUpdateButton}>
                       <form onSubmit={this.UpdateObsBtnStage}>
                           <button type='submit'>Update</button>
                       </form>
                   </div>
              
            </div>
        )
    }
}

export default EditObs