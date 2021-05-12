import React, {useState} from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  
`

const StyledP = styled.p`
font-size:1em;
padding-top:10px;
  
`

export const Recommendation = ({activity}) => {


    return (
        <StyledDiv>
            {/* {recomendationList.find(recomendation=>recomendation.id == randomNumber)} */}
            <h1>Recommendations</h1>
            <StyledP>Regarding your mood, we recommend you to {activity.action}: {activity.title}</StyledP>
            
        </StyledDiv>
    )
}
