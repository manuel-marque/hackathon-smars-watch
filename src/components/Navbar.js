import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.div`
position: fixed;
  bottom: 0;
  width: 100%;
  height: 10vh;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
  background-color: ${props=>props.theme.colors.hover};
  display: flex;
  overflow-x: auto;

  
`

const StyledDiv = styled.div`
display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  min-width: 50px;
  overflow: hidden;
  white-space: nowrap;
  font-size: 18px;
  -webkit-tap-highlight-color: transparent;
  transition: background-color 0.1s ease-in-out, transform .2s;
     &:hover{
          background-color: ${props=>props.theme.colors.blue};
          transform: scale(1.15);
        
    }
`


const StyledSpan = styled.span`
padding-top:5px;

`

const StyledLink = styled(Link)`
display:flex;
padding-top:10px;
flex-direction:column;
justify-content:center;
align-items:center;
color:${props=>props.theme.colors.white};
    text-decoration: none;
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
        
    }
`;

function Navbar() {
    return (
          <div>
               
               <Nav>

               <StyledDiv >
                    <StyledLink  to='/'><i className="material-icons nav__icon">home</i>
                         <StyledSpan >Home</StyledSpan>
                    </StyledLink >
               </StyledDiv>

               <StyledDiv>
                    <StyledLink  to='/health'>
                         <i class="material-icons nav__icon">emoji_emotions</i>
                         <StyledSpan >Mood</StyledSpan>
                    </StyledLink >
               </StyledDiv>

               <StyledDiv>
                    <StyledLink  to='/Survival'>
                         <i class="material-icons nav__icon">feedback</i>
                         <StyledSpan >Survival kit</StyledSpan>
                    </StyledLink>
               </StyledDiv>

               <StyledDiv>
                    <StyledLink  to='/group'>
                         <i class="material-icons nav__icon">people</i>
                         <StyledSpan >Groups</StyledSpan>
                    </StyledLink>
               </StyledDiv> 

               
               </Nav> 
          </div>
        )
}

export default Navbar
