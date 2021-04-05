import React, { Component } from 'react';
import DeleteObs from './DeleteObs';
import EditObs from './EditObs';
import './css/UWO.css'



class UserWeatherData extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userData: props.userData,
            error: null
        }
    }





    render() {
     
        const { userData } = this.props


        const showData = userData.map(data => {
            return(
                
                <div key={data.id}>
                    <div className='row obsbox'>
                    
                    <div className='colum obsbox-2'>
                        {data.obs_date_time}
                    </div>
                    <div className='colum obsbox-2'>
                        {data.icao}
                    </div>
                    <div className='colum obsbox-3'>
                        {data.wind}
                    </div>
                    <div className='colum obsbox-1'>
                        {data.vis}
                    </div>
                    <div className='colum obsbox-4'>
                        {data.clouds}
                    </div>
                    <div className='colum obsbox-4'>
                        {data.wx}
                    </div>
                    <div className='colum obsbox-1'>
                        {data.tmp}
                    </div>
                    <div className='colum obsbox-1'>
                        {data.dp}
                    </div>
                    <div className='colum obsbox-4'>
                        {data.remarks}
                    </div>
                    

                </div>
                <div className='row obsbox'>
                    <div className='colum'>               
                        <DeleteObs id={data.id} />
                    </div>
                    <div className='colum'>
                        <EditObs id={data.id} />
                    </div>
                </div>
                </div>
            )
        })

        return(
            <div>
                
                <br></br>
                
                    {showData}
                
            </div>

        )
    }
}

export default UserWeatherData
