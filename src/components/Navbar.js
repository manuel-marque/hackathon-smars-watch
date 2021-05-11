import React from 'react'
import {Link} from 'react-router-dom';

function Navbar() {
    return (
        <div>
           <nav className="nav">

         {/*  <Link to='/'>Game List</Link>
            <Li><StyledLink to='/games/data.id'>Game Details</StyledLink></Li> */}

               <div className="nav__link">
                    <i className="material-icons nav__icon">home</i>
                    <span className="nav__text">Home</span>
               </div>

               <div className="nav__link nav__link--active">
                    <i class="material-icons nav__icon">emoji_emotions</i>
                    <span class="nav__text">Mood</span>
               </div>

               <div className="nav__link nav__link--active">
                    <i class="material-icons nav__icon">feedback</i>
                    <span class="nav__text">Survival kit</span>
               </div>

               <div className="nav__link nav__link--active">
                    <i class="material-icons nav__icon">people</i>
                    <span class="nav__text">Groups</span>
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
