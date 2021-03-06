import React, {useState} from 'react';
import { Health } from './Health';
import { Message } from './Message';
import { Group } from './Group';
import Survival  from './Survival';
import Weather  from './Weather';
import { Entertainment } from './Entertainment';
import { DailyImage } from './DailyImage';
import styled, {css} from 'styled-components';

const AppContiner=styled.div`
margin:20px;

`
const sharedStyles = css`

    display:flex;
    width:22%;
  height: auto;
  padding-bottom:20px; 
  margin:10px;
  box-shadow: ${props=>props.theme.boxShadow};
  text-align: center;
  border-radius: 11px; 
  height:22vh;
  flex-direction:column;
  align-items:center;
  justify-content:space-between;
  padding:15px;




  transition:  transform .2s;
     &:hover{
        
          transform: scale(1.15);
        
    }
    
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
const BoxImageDisplayer = styled.div`
  ${sharedStyles}
  padding:0px;
  margin-bottom:30px;
    
`

const BoxDisplayer = styled.div`
  ${sharedStyles}
    
`

const ScrollBox = styled.div`
  ${sharedStyles}
  overflow: scroll;
    
`
const StyledHappyDiv = styled.div`
  ${sharedStyles}
  background-color:${props=>props.theme.colors.green};
  
  
    
`
const StyledSadDiv = styled.div`
  ${sharedStyles}
  background-color:${props=>props.theme.colors.red};
    
`

export const Home = () => {


    let[isHappy, setIsHappy]=useState(true)
    let[mood, setMood]=useState("") 

    const changeMood=()=>{
        if (isHappy){
            setMood("You feel sad")
            setIsHappy(false)
            
         }else{
            setMood("You are happy")
            setIsHappy(true)
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
                <BoxImageDisplayer>
                    <DailyImage/>
                </BoxImageDisplayer>
                <ScrollBox>  
                    <Weather/>
                </ScrollBox>
            </BoxesContainer>
            <BoxesContainer>

                {
                mood===""
                ?<BoxDisplayer>
                <Health mood={mood} isHappy={isHappy} changeMood={changeMood}/>
                
                </BoxDisplayer>:
                isHappy ?
                <StyledHappyDiv>
                    <Health mood={mood} isHappy={isHappy} changeMood={changeMood}/>
                    
                </StyledHappyDiv>:
                <StyledSadDiv>
                    <Health mood={mood} isHappy={isHappy} changeMood={changeMood}/>
                </StyledSadDiv>
                }
                
                <ScrollBox>
                    <Survival/>
                </ScrollBox>
                
                <BoxDisplayer>
                    <Entertainment isHappy={isHappy}/>
                </BoxDisplayer>
            
                
                
            </BoxesContainer>

            
        </AppContiner>
    )
}
