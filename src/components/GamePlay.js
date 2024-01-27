import React, { useState } from 'react'
import TotalScore from './TotalScore'
import NumberSelector from './NumberSelector'
import styled from 'styled-components'
import RollDice from './RollDice'
import {OutlineButton,Button} from '../styled/button.js';
import Rules from './Rules'

const GamePlay = () => {
    const[score,setScore]=useState(0);
    const [selectedNum,setSelectedNum]=useState();
    const[currentDice,setCurrentDice]=useState(1);
    const[error,setError]=useState("");
    const[showRules,setShowRules]=useState(false);
    
    const generateRandomNumber=(min,max)=>{
        return Math.floor(Math.random()*(max-min)+min);
    }
    const rollDice=()=>{
        if(!selectedNum){
        setError("You have not Selected a Number");
            return
        }
        const randomNumber=generateRandomNumber(1,7);
        setCurrentDice(randomNumber);
        if(selectedNum==randomNumber){
            setScore((prev)=>prev+randomNumber);
        }else setScore((prev)=>prev-2);
        setSelectedNum();
    }

const resetScore=()=>{
    setScore(0);
}

  return (
    <MainContainer>
        <div className='top-section'>
        <TotalScore score={score}/>
        <NumberSelector error={error} setError={setError} selectedNum={selectedNum} setSelectedNum={setSelectedNum}/>
        </div>
        <RollDice currentDice={currentDice} rollDice={rollDice} />
        <div className='btns'>
            <OutlineButton onClick={resetScore}>
                Reset Score
                </OutlineButton>
        </div>
        <div className='btns'>
                <Button onClick={()=>setShowRules(prev=>!prev)}>
                    {showRules?"Hide":"Show Rules !"}
            </Button>
            </div>        
           {showRules && <Rules/>}
    </MainContainer>
  )
}

export default GamePlay

const MainContainer=styled.main`
padding-top:70px;
.top-section{
    display:flex;
    justify-content:space-around;
    align-items:end;
}
.btns{
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;

   margin-top:20px;
   
}`;
