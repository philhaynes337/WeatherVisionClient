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
            updateButton: 'show showStyle',
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

                    <div className={showUpdateTable}>
                    <form name='Update Obs' onSubmit={this.UpdateObsBtn}>
                    <div className='login-r'>
                            <div className='login-c'>
                            Date/Time:

                            </div>
                            <div className='login-c'>
                            <input type='text' name='obs_date_time' id='obs_date_time' />


                            </div>
                    </div>

                    <div className='login-r'>
                            <div className='login-c'>
                            Location:

                            </div>
                            <div className='login-c'>
                            <input type='text' name='icao' id='icao' />


                            </div>
                    </div>

                    <div className='login-r'>
                            <div className='login-c'>
                            Wind:

                            </div>
                            <div className='login-c'>
                            <input type='text' name='wind' id='wind' />


                            </div>
                    </div>

                    <div className='login-r'>
                            <div className='login-c'>
                            Visibility:

                            </div>
                            <div className='login-c'>
                            <input type='text' name='vis' id='vis' />


                            </div>
                    </div>


                    <div className='login-r'>
                            <div className='login-c'>
                            Clouds:

                            </div>
                            <div className='login-c'>
                            <input type='text' name='clouds' id='clouds' />


                            </div>
                    </div>

                    <div className='login-r'>
                            <div className='login-c'>
                            Weather:

                            </div>
                            <div className='login-c'>
                            <input type='text' name='wx' id='wx' />


                            </div>
                    </div>

                    <div className='login-r'>
                            <div className='login-c'>
                            Temperature:

                            </div>
                            <div className='login-c'>
                            <input type='text' name='tmp' id='tmp' />


                            </div>
                    </div>

                    <div className='login-r'>
                            <div className='login-c'>
                            Dew Point:

                            </div>
                            <div className='login-c'>
                            <input type='text' name='dp' id='dp' />


                            </div>
                    </div>

                    <div className='login-r'>
                            <div className='login-c'>
                            Remarks:

                            </div>
                            <div className='login-c'>
                            <input type='text' name='remarks' id='remarks' />


                            </div>
                    </div>


                        <div>
                                <button type='submit' className='submitServer'>Submit to Server</button>
                                </div>
                                </form>
                                <br />
                                <br />
                                <form>
                                <button type='cancel' className='submitCancel' onClick={this.handleCancel}>Cancel</button>
                                </form>
                        
                        </div>
                   
                  
                   <div className={showUpdateButton}>
                       <form name='Update Submit Obs' onSubmit={this.UpdateObsBtnStage}>
                           <button type='submit'>Update</button>
                       </form>
                   </div>
              
            </div>
        )
    }
}

export default EditObs