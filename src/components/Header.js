import React, { useState } from 'react'
import MenuIcon from '@material-ui/icons/Menu';
import "./css/Header.css"
function Header() {
    const [classes, setClasses] = useState(null)
    const classChanges = () => {
        if (classes === null) {
            setClasses('showLinks')
        }
        else {
            setClasses(null)
        }
    }
    return (
        <div className="Header-Container">
            <div className="logoWrapper">
                <a href="#home"><img src="https://cdn.discordapp.com/attachments/845771359643762770/866032368900243457/second.png" /></a>
                <MenuIcon className="menu" style={{ fontSize: 40, color: 'white' }} onClick={classChanges} />
            </div>
            <div className={`linkWrapper ${classes}`}>
                <a href="#home">HOME</a>
                <a href="#contact">CONTACT</a>
                <a href="#about">ABOUT US</a>
            </div>
        </div>


    )
}



export default Header
