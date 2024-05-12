import styled from 'styled-components'

const NumberSelector = ({error,setError,selectedNum,setSelectedNum}) => {
    const array=[1,2,3,4,5,6];
    const numberSelectorHandler=(ele)=>{
      setSelectedNum(ele);
      setError("");
    }
  return (

    <NumberSelectorContainer>
      <p className='error'>{error}</p>
        <div className='flex'>
        {array.map((ele,i)=>{
            return <Box isSelected={ele===selectedNum} 
                key={i} 
                onClick={()=>numberSelectorHandler(ele)}>
                {ele}
            </Box>
        })}
      </div>
        <p>Select Number</p>
      </NumberSelectorContainer>
  )
}

export default NumberSelector
const NumberSelectorContainer=styled.div`
display:flex;
flex-direction:column;
align-items:end;
.flex{
    display:flex;
    gap:24px;

}
p{
    font-size:24px;
    font-weight:700;
}
.error{
  color:red;
}
`;

const Box=styled.div`
height:72px;
width:72px;
border:1px solid black;
display:grid;
place-items:center;
font-size:24px;
font-weight:700;
background-color:${(props)=>(props.isSelected ? "black":"white")};
color:${(props)=>(props.isSelected ? "white":"black")};
&:hover{
cursor:pointer;
}
`
