import React, {useState,useEffect} from 'react';
import {Recommendation} from "./Recommendation"
import styled from 'styled-components';
import {recomendationList} from "../../data/recomendationList"
import {getRandomId} from "../../helper/function"

const StyledDiv=styled.div`
width:100%;
height:100%;

`
const Img=styled.img`
height: 100%;
    width: 100%;
    object-fit: cover;
    
`

export const Entertainment = ({isHappy}) => {


    let[randomNumber]= useState(getRandomId())
    let[activity,setActivity]=useState([])
    let[action,setAction]=useState("")

    /* let findRandomActivity= recomendationList.find(recomendation=>recomendation.id == randomNumber) */
    useEffect(() => {
        setActivity(recomendationList.find(recomendation=>recomendation.id === randomNumber))
     }, [])
    

    let [isHovered, setIsHovered ]= useState(false)
    return (
        <StyledDiv onMouseEnter={() => setIsHovered(true)}
        /*a  */
        onMouseLeave={() => setIsHovered(false)}>
            {isHovered? <Img src={activity.img}></Img>: <Recommendation activity={activity}/>}
            
            
            
        
        </StyledDiv>
    )
}
