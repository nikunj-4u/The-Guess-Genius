import React, { useState } from 'react'
import styled from 'styled-components'

const RollDice = ({currentDice,rollDice}) => {
    
  return (
    
    <DiceContainer>
        <div className='dice' onClick={rollDice}>
      <img src={`https://raw.githubusercontent.com/anshuopinion/React-10-Projects/project-3/project-3/public/images/dice/dice_${currentDice}.png`} alt="dice-1"/>
      </div>
      <p>Click on Dice to Roll</p>
    </DiceContainer>
  )
}

export default RollDice
const DiceContainer=styled.div`
display:flex;
flex-direction:column;
align-items:center;
margin-top:48px;
p{
    font-size:24px;
}
.dice{
    cursor:pointer;
}
`

