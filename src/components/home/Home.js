import React from 'react';
import { Health } from './Health';
import { Message } from './Message';
import { Group } from './Group';
import { Survival } from './Survival';
import { Weather } from './Weather';
import { Entertainment } from './Entertainment';
import { DailyImage } from './DailyImage';
import styled from 'styled-components';

const AppContiner=styled.div`
margin:20px;

`

const BoxesContainer = styled.div`
display:flex;
flex-flow: row;
justify-content:space-around;
align-items:flex-start;
width:100%;
margin-bottom:10px;
height:auto;
`

export const Home = () => {
    return (
        <AppContiner>
            <BoxesContainer>
                {/* <Message/> */}
            </BoxesContainer>
            <BoxesContainer>
                {/* <DailyImage/>
                <Weather/> */}
            </BoxesContainer>
            <BoxesContainer>
               {/*  <Health/>
                <Survival/>
                <Entertainment/>
                <Group/> */}
            </BoxesContainer>


            
            
        </AppContiner>
    )
}
