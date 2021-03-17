import React, { Component } from 'react';




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
                <div key={data.id} className='row obsbox'>
                    <div className='colum'>
                        {data.obs_date_time}
                    </div>
                    <div className='colum'>
                        {data.icao}
                    </div>
                    <div className='colum'>
                        {data.wind}
                    </div>
                    <div className='colum'>
                        {data.vis}
                    </div>
                    <div className='colum'>
                        {data.clouds}
                    </div>
                    <div className='colum'>
                        {data.wx}
                    </div>
                    <div className='colum'>
                        {data.tmp}
                    </div>
                    <div className='colum'>
                        {data.dp}
                    </div>
                    <div className='colum'>
                        {data.remarks}
                    </div>
                </div>
            )
        })

        return(
            <div>
                User Weather Component
                <br></br>
                
                    {showData}
                
            </div>

        )
    }
}

export default UserWeatherData
