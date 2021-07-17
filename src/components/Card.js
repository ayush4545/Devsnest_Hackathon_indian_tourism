import React from 'react'
import "./css/Card.css"
// import Tilt from 'react-vanilla-tilt'
import Tilt from 'react-parallax-tilt';
import Flip from 'react-reveal/Flip';
import Fade from 'react-reveal/Fade';
function Card({key,img,city,history}) {
    return (
        <Fade bottom>
        <Tilt  className="tilt"  options={{max: 45,perspective:1000,transition:true }}>
        <div className="card">
            <img src={img} />
            <div className="info">
                <h1>Taj Mahal</h1>
                <h3>{city}</h3>
                <p>{history}.</p>
                <a href="#" className="button">Read More</a>
            </div>
        </div>
        {/* <h1 className="city">Taj Mahal</h1> */}
        </Tilt>
        </Fade>
    )
}

export default Card
