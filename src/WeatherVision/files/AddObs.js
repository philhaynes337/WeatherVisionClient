import React, { Component } from 'react';
import WvMenu from './WvMenu';
import config from '../../ApiConfig';


class AddObs extends Component {
    constructor(props) {
        super(props)
        this.state = {
            error: null,
            userEmail: [],
            added: '',
        }
    }


    AddObsBtn = e => {

        e.preventDefault();
        const { obs_date_time, icao, wind, vis, clouds, wx, tmp, dp, remarks } = e.target

        const data = {
            obs_date_time: obs_date_time.value,
            icao: icao.value,
            wind: wind.value,
            vis: vis.value,
            clouds: clouds.value,
            wx: wx.value,
            tmp: tmp.value,
            dp: dp.value,
            remarks: remarks.value,
            user: window.sessionStorage.getItem('user'),
            user_email: window.sessionStorage.getItem('userEmail')

        }
        


        const userinfo = window.sessionStorage.getItem('user')
        const userUrl = `${config.API_ENDPOINT}/loggedin/${userinfo}/addobs`

        //console.log(userUrl)
        //console.log(`Bearer ${config.API_KEY}`)

        const options = {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${config.API_KEY}`
            }
        }

        fetch(userUrl, options)
        .then(res => {
            if (!res.ok) {
                return res.json().then(error => {
                    throw error
                })
            }
           
        })
   
        .catch (error => {
            console.log(error)
            this.setState({
                added: 'Problem Adding Observation'
            })
        })
   
        this.setState({
            added: 'Observation Added'
        })
    }


    render() {

        //console.log(this.state)
        const showAddedObs = this.state.added

        return(
            <div>
                <div>
                    <WvMenu />
                </div>
                <div>
                    {showAddedObs}
                </div>
                <div>
                    <form onSubmit={this.AddObsBtn}>

                        <div>
                            <label htmlFor='obs_date_time'>
                                Date / Time: 
                            </label>
                            <input type='text' name='obs_date_time' id='obs_date_time' defaultValue='03/21/2021 05:00PM CST' required />
                        </div>
                        <div>
                            <label htmlFor='icao'>
                                Location:
                            </label>
                            <input type='text' name='icao' id='icao' defaultValue='KDFW' required />
                        </div>
                        <div>
                            <label htmlFor='wind'>
                                Wind:
                            </label>
                            <input type='text' name='wind' id='wind' defaultValue='12005G15KT' required />
                        </div>
                        <div>
                            <label htmlFor='vis'>
                                Visibility:
                            </label>
                            <input type='text' name='vis' id='vis' defaultValue='10SM' required />
                        </div>
                        <div>
                            <label htmlFor='clouds'>
                                Clouds:
                            </label>
                            <input type='text' name='clouds' id='clouds' defaultValue='OVC100' required />
                        </div>
                        <div>
                            <label htmlFor='wx'>
                                Weather:
                            </label>
                            <input type='text' name='wx' id='wx' defaultValue='HZ' required />
                        </div>
                        <div>
                            <label htmlFor='tmp'>
                                Temperature:
                            </label>
                            <input type='text' name='tmp' id='tmp' defaultValue='10' required />
                        </div>
                        <div>
                            <label htmlFor='dp'>
                                Dew Point:
                            </label>
                            <input type='text' name='dp' id='dp' defaultValue='09' required />
                        </div>
                        <div>
                            <label htmlFor='remarks'>
                                Remarks:
                            </label>
                            <input type='text' name='remarks' id='remarks' defaultValue='KDFW' required />
                        </div>
                        <div>
                            <button type='submit'>Add Observation</button>
                        </div>

                    </form>
                </div>

            </div>
        )
    }
}

export default AddObs