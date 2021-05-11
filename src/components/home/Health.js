import React from 'react';
import styled from 'styled-components';

const StyledDivHappy =styled.div`
background-color:${props=>props.theme.colors.green};

`

const StyledDivSad =styled.div`
background-color:${props=>props.theme.colors.red};

`

export const Health = ({mood, changeMood}) => {
    return (
        <>
            {mood ?
                <StyledDivHappy>
                    <h1>Your Mood</h1>

                    <button onClick={changeMood}>How do you feel today?</button>
                </StyledDivHappy>:
                <StyledDivSad>
                <h1>Your Mood</h1>

                <button onClick={changeMood}>How do you feel today?</button>
                </StyledDivSad>
            }
        </>
    )
}
