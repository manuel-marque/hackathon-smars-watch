import React, {useState} from 'react';
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

const BoxWrapper = styled.div`
  display: flex;
  flex-direction:row;
  justify-content: space-around;
  margin: 5%; 
  width:100%;
  height:auto;
    
`

const BoxDisplayer = styled.div`
  width:22%;
  height: auto;
  padding-bottom:20px; 
  margin:10px;
  box-shadow: ${props=>props.theme.boxShadow};
  text-align: center;
  border-radius: 11px; 
  height:22vh;
    
`

export const Home = () => {


    let[mood, setMood]=useState(false)

    const changeMood=()=>{
        if (mood){
            setMood(false)
            
         }else{
            setMood(true)
         }
    }
    return (
        <AppContiner>
            <BoxesContainer>
                <BoxDisplayer>
                    <Message/>
                </BoxDisplayer>
            </BoxesContainer>
            <BoxesContainer>
                <BoxDisplayer>
                    <DailyImage/>
                </BoxDisplayer>
                <BoxDisplayer>  
                    <Weather/>
                </BoxDisplayer>
            </BoxesContainer>
            <BoxesContainer>
                <BoxDisplayer>
                    <Health  mood={mood} setMood={setMood} changeMood={changeMood}/>
                </BoxDisplayer>
                <BoxDisplayer>
                    <Survival/>
                </BoxDisplayer>
                
                <BoxDisplayer>
                    <Entertainment/>
                </BoxDisplayer>
            
                <BoxDisplayer>
                    <Group/>
                </BoxDisplayer>
                
            </BoxesContainer>

            
        </AppContiner>
    )
}
