import React ,{useState} from 'react'
import Tilt from 'react-parallax-tilt';
import Fade from 'react-reveal/Fade';
import CancelOutlinedIcon from '@material-ui/icons/CancelOutlined';
import './css/Card.css'

function SliderCard({ img, city, history }) {
    const [classNames,setClassName]=useState('hide')
    return (
        <Fade top>
        <Tilt className="tilt" options={{ max: 45, perspective: 1000, transition: true }}>
            <div className="card Slider" onClick={()=>{setClassName('show')}}>
                <img src={img} alt={city} />
                <div className="info">
                    <h3>{city}</h3>
                    <p>{history}</p>
                </div>
            </div>
        </Tilt>

        <div className={`SliderScreen  ${classNames}`}>
                <CancelOutlinedIcon  className="cancel" style={{ fontSize: 50 }} onClick={()=>{setClassName('hide')}}/>
                 <div className="card-SliderScreen">
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

export default SliderCard
