import React from 'react'
import styled from "styled-components"
import {Button} from '../styled/button.js';

const StartGame = ({toggle}) => {
  return (
   <>
   <Container>
    <div>
    <img src= "https://raw.githubusercontent.com/anshuopinion/React-10-Projects/project-3/project-3/public/images/dices.png" alt="Dice"/>
    </div>
    <div className="content">
      <h1>
        Dice Game
      </h1>
      <Button onClick={toggle}>Play Now</Button>
      </div>
   </Container>
   </>
  )
}

export default StartGame;
const Container=styled.div`
max-width:1180px;
display:flex;
margin:0 auto;
height:100vh;
align-items:center;

.content{
  h1{
    font-size:96px;
    white-space:nowrap;
  }
}
`

