import React from 'react'
import pictureDay from '../../img/car-media.jpg'
import styled from 'styled-components';

const StyledDiv=styled.div`
width:100%;
height:100%;

`
const Img=styled.img`
height: 100%;
    width: 100%;
    object-fit: cover;
`

export const DailyImage = () => {
    return (
        <StyledDiv>
            <h3>Image Of the Day</h3>
            <Img src={pictureDay} alt="photoDay" ></Img> 
        </StyledDiv>
    )
}
