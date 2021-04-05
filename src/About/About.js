import React, { Component } from 'react';
import './About.css'

class About extends Component {
    render() {
        return (
            <div className='format-a'>
                <h3>What is an observation / METAR?</h3>
                <p>
                    A METAR is simply a format for reporting weather information used by pilots and meteorologist.
                </p>
                <h3>What is the format? (simple)</h3>
                <p>
                    
                    KTTN 051853Z 04011KT 1/2SM VCTS SN FZFG BKN003 OVC010 M02/M02 A3006 RMK AO2 
                        <li>ICAO / Location: KTTN</li>
                        <li>Time in UTC / Zulu: 051853Z (05 is the Day of month, 1853 is the time, Z is for Zulu</li>
                        <li>Wind: 04011KT (040 is direction in degrees, 11KT is speed in knots.</li>
                        <li>Visibility: 1/2SM (1/2 Statue Miles) </li>
                        <li>Weather: VCTS SN FZFG (Vicinity Thunderstorms, Snow, and Freezing Fog)</li>
                        <li>Clouds: BKN003 OVC010 (Broken at 300FT Overcast at 1,000FT</li>
                        <li>Temperature: M02 (Minus 02C)</li>
                        <li>Dew Point: M02 (Minus 02C</li>
                        <li>Altimeter: 3006 (30.06 inHg)</li>
                        <li>Remarks: RMK (AO2 means the station is automated with a precipitation discriminator sensor)</li>
                        
                    
                </p>
            </div>
        )
    }
}

export default About