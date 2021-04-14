import React, { Component } from 'react';
import WvMenu from './WvMenu';
import config from '../../ApiConfig';
import './css/AddObs.css';


class AddObs extends Component {
    constructor(props) {
        super(props)
        this.state = {
            error: null,
            userEmail: [],
            added: '',
            addedClass: '',
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
                added: 'Problem Adding Observation',
                addedClass: 'addobs-c'
            })
        })
   
        this.setState({
            added: 'Observation Added',
            addedClass: 'addobs-b'
        })
    }


    render() {

        //console.log(this.state)
        const showAddedObs = this.state.added
        const addedClass = this.state.addedClass

        return(
            <div>
                <div>
                    <WvMenu />
                </div>
                <div className={addedClass}>
                    {showAddedObs}
                </div>
                <div className='addobs-a'>
                    <form onSubmit={this.AddObsBtn}>


                    <div className='login-r'>
                            <div className='login-c'>

                                    <label htmlFor='obs_date_time'>
                                    Date / Time: 
                                    </label>
                            </div>
                            <div className='login-c'>
                            <input type='text' name='obs_date_time' id='obs_date_time' defaultValue='03/21/2021 05:00PM CST' required />

                            </div>
                        </div>

                        <div className='login-r'>
                            <div className='login-c'>

                                    <label htmlFor='icao'>
                                    Location:
                                    </label>
                            </div>
                            <div className='login-c'>
                            <input type='text' name='icao' id='icao' defaultValue='KDFW' required />

                            </div>
                        </div>

                        <div className='login-r'>
                            <div className='login-c'>

                                    <label htmlFor='wind'>
                                    Wind:
                                    </label>
                            </div>
                            <div className='login-c'>
                            <input type='text' name='wind' id='wind' defaultValue='12005G15KT' required />

                            </div>
                        </div>

                        <div className='login-r'>
                            <div className='login-c'>

                                    <label htmlFor='vis'>
                                    Visibility:
                                    </label>
                            </div>
                            <div className='login-c'>
                            <input type='text' name='vis' id='vis' defaultValue='10SM' required />

                            </div>
                        </div>

  
                        <div className='login-r'>
                            <div className='login-c'>

                                    <label htmlFor='clouds'>
                                    Clouds:
                                    </label>
                            </div>
                            <div className='login-c'>
                            <input type='text' name='clouds' id='clouds' defaultValue='OVC100' required />

                            </div>
                        </div>

                        <div className='login-r'>
                            <div className='login-c'>

                                    <label htmlFor='wx'>
                                    Weather:
                                    </label>
                            </div>
                            <div className='login-c'>
                            <input type='text' name='wx' id='wx' defaultValue='HZ' required />

                            </div>
                        </div>
                        <div className='login-r'>
                            <div className='login-c'>

                                    <label htmlFor='tmp'>
                                    Temperature:
                                    </label>
                            </div>
                            <div className='login-c'>
                            <input type='text' name='tmp' id='tmp' defaultValue='10' required />

                            </div>
                        </div>

                        <div className='login-r'>
                            <div className='login-c'>

                                    <label htmlFor='dp'>
                                    Dew Point:
                                    </label>
                            </div>
                            <div className='login-c'>
                            <input type='text' name='dp' id='dp' defaultValue='09' required />

                            </div>
                        </div>

                        <div className='login-r'>
                            <div className='login-c'>

                                    <label htmlFor='remarks'>
                                    Remarks:
                                    </label>
                            </div>
                            <div className='login-c'>
                            <input type='text' name='remarks' id='remarks' defaultValue='KDFW' required />

                            </div>
                        </div>


                        <div className='login-r'>
                            <div className='login-c'></div>
                            <div className='login-c'>
                            <button className='addBtn' type='submit'>Add Observation</button>
                        </div>
                        </div>

                    </form>
                </div>

            </div>
        )
    }
}

export default AddObs