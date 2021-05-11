import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components'

const Nav = styled.div`
background-color:#060B26;
height:100px;
color:white;
`

const StyledLink = styled(Link)`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
    text-decoration: none;
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;

function Navbar() {
    return (
          <div>
               
               <nav className="nav">

               <div className="nav__link">
                    <StyledLink  to='/'><i className="material-icons nav__icon">home</i>
                         <span className="nav__text">Home</span>
                    </StyledLink >
               </div>

               <div className="nav__link nav__link--active">
                    <StyledLink  to='/health'>
                         <i class="material-icons nav__icon">emoji_emotions</i>
                         <span class="nav__text">Mood</span>
                    </StyledLink >
               </div>

               <div className="nav__link nav__link--active">
                    <StyledLink  to='/Survival'>
                         <i class="material-icons nav__icon">feedback</i>
                         <span class="nav__text">Survival kit</span>
                    </StyledLink>
               </div>

               <div className="nav__link nav__link--active">
                    <StyledLink  to='/group'>

                         <i class="material-icons nav__icon">people</i>
                         <span class="nav__text">Groups</span>
                    </StyledLink>
               </div>

               <div className="nav__link nav__link--active">
                    <i class="material-icons nav__icon">lock</i>
                    <span class="nav__text">Privacy</span>
               </div>

               
               </nav> 
          </div>
        )
}

export default Navbar
