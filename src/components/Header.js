import React from 'react'
import styled from 'styled-components'
function Header() {
    return (
        <Container>
             <Wrapper>
                <a href=""><img src="https://cdn.discordapp.com/attachments/845771359643762770/866032368900243457/second.png"/></a>
             </Wrapper>
             <LinksWrapper>
                  <a href="#home">HOME</a>
                  <a href="#contact">CONTACT</a>
                  <a href="#about">ABOUT US</a>
             </LinksWrapper>
        </Container>
            
        
    )
}


const Container=styled.div`
 width:98vw;
 height:10vh;
 display:flex;
 align-items:center;
 justify-content:space-between;
 padding:0.5rem;
 background-color:rgba(0,0,0,0.4);
 position:fixed;
 top:0;
 z-index:10000;
 margin-left:5px;
`

const Wrapper=styled.div`
  width:10%;
  height:90%;
  background-color:green;

  img{
      width:100%;
      height:100%;
      object-fit:cover;
      background-color:transparent
  }
`

const LinksWrapper=styled.div`
  background-color:transparent;
  width:40%;
  height:100%;
  display:flex;
  justify-content:space-evenly;
  align-items:center;

  a{
      font-size:2rem;
      color:white;
      font-weight:600;
      letter-spacing:1.2px;
      transform:scale(1);
      transition:all 0.3s linear;
      text-decoration:none;
      cursor: pointer;
  }

  a:hover{
      color:rgba(255,255,255,0.4);
      transform:scale(0.9);
  }

`
export default Header
