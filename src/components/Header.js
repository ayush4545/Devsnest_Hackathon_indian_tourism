import React from 'react'
import styled from 'styled-components'
import MenuIcon from '@material-ui/icons/Menu';
import "./css/Header.css"
function Header() {
    return (
        <div className="Header-Container">
             <div className="logoWrapper">
                <a href="#home"><img src="https://cdn.discordapp.com/attachments/845771359643762770/866032368900243457/second.png"/></a>
                <MenuIcon className="menu"/>
             </div>
             <div className="linkWrapper">
                  <a href="#home">HOME</a>
                  <a href="#contact">CONTACT</a>
                  <a href="#about">ABOUT US</a>
             </div>
        </div>
            
        
    )
}



export default Header
