import React from 'react';
import styled  from 'styled-components';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import SentimentSatisfiedIcon from '@material-ui/icons/SentimentSatisfied';

const Button = styled.button`
    display:block;
    background-color:${props=>props.theme.colors.buttonHover};
   /*  font-size: .9rem; */
    /* width:25%;
    height:40px; */
    color: ${props=>props.theme.colors.white};
   /*  text-transform:uppercase; */
    font-weight:bold;
    border:1px solid #000;
    border-radius: 5px;
    /* margin-top:10px; */
    padding: 5px 20px;
    box-sizing: border-box;
    transition: background-color .3s ease;
   
    &:hover{
        background-color:${props=>props.theme.colors.button};
        cursor:pointer;
    }
`




export const Health = ({ changeMood, mood,isHappy}) => {
    return (
        <>
        
                
            <h1>{mood===""? "How do you feel today?":  mood}</h1>  
            <span>{mood===""? <SentimentSatisfiedIcon/>:  isHappy?
                <InsertEmoticonIcon/>:  <SentimentVeryDissatisfiedIcon/>}</span>
                
            
        
            <Button onClick={changeMood}>Select your today's Mood</Button>
                
            
        </>
    )
}
