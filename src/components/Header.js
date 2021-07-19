import React from 'react'
import styled from 'styled-components'
import MenuIcon from '@material-ui/icons/Menu';
import "./css/Header.css"
import logo from '../images/logo.png'
function Header() {
    return (
        <div className="Header-Container">
             <div className="logoWrapper">
                <a href="#home"><img src={logo}/></a>
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