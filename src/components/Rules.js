import React from 'react'
import styled from 'styled-components'

const Rules = () => {
  return (
    <RulesContainer>
        <h2>How To play THE GUESS GENIUS</h2>
        <div className='text'>
            <p>1️⃣Select any number</p>
            <p>2️⃣Click on the dice image</p>
            <p>3️⃣After clicking on the dice, if selected number is equal to the dice number you will get the same points as the number.</p>
            <p>4️⃣If you get the wrong guess then 2 points will be deducted.</p>
        </div>
        </RulesContainer>
  )
}

export default Rules
const RulesContainer=styled.div`
background-color:#FBF1F1;
max-width:800px;
margin:0 auto;
margin-top:40px;
border-radius:10px;
padding:20px;
h2{
    font-size:24px;
}
.text{
    margin-top:24px;
}
`
