import React, { useState } from 'react'
import "./css/Card.css"
// import Tilt from 'react-vanilla-tilt'
import Tilt from 'react-parallax-tilt';
import Flip from 'react-reveal/Flip';
import Fade from 'react-reveal/Fade';
import CancelOutlinedIcon from '@material-ui/icons/CancelOutlined';
function Card({ img, city, history }) {
    const [classNames,setClassName]=useState('hide')
    
    return (
        <Fade bottom>
            <Tilt className="tilt" options={{ max: 45, perspective: 1000, transition: true }}>
                <div className="card">
                    <img src={img} alt={city} />
                    <div className="info">
                        <h3>{city}</h3>
                        <p>{history}.</p>
                        <button className="button" onClick={()=>setClassName('show')}>Read More</button>
                    </div>
                </div>
            </Tilt>

            
                <div className={`popup-screen ${classNames}`}>
                <CancelOutlinedIcon  className="cancel" style={{ fontSize: 50 }} onClick={()=>{setClassName('hide')}}/>
                 <div className="card-popup">
                     <img src={img} alt={city}/>
                     <div className="info">
                         <div className="contains">
                             <h1 className="h1">{city}</h1>
                             <p>{history}</p>
                         </div>
                     </div>
                 </div>
             </div>
        </Fade>
    )
}

export default Card
