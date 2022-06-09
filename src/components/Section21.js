import React from 'react'
import styled from "styled-components"
function Section21({title21,description21,leftBtnText21,rightBtnText21,backgroundImg21}) {



  return (
    <Wrap bgImage={backgroundImg21}>

    <ItemText21>
      <h1>
        {title21}
      </h1>
      <p>{description21}</p>
    </ItemText21>
    <Buttons21> <ButtonGroup21>
        <LeftButton21>
            {leftBtnText21}
        </LeftButton21>
        {rightBtnText21 &&
                <RightButton21>
                {rightBtnText21}
            </RightButton21>
        
        }


    </ButtonGroup21>
    <DownArrow21 src="/images/down-arrow.svg"></DownArrow21>
    </Buttons21>
   
    </Wrap>
  )
}

export default Section21

const Wrap=styled.div`
width:75%;
height:75%;
background-size:cover;
background-position:center;
background-repeat: no-repeat;
display:flex;
flex-direction:row;
justify-content:space-between;   //vertical 
align-items:center; //horizontal
background-image: ${props => `url("/images/${props.bgImage}")`
}};

`


const ItemText21=styled.div`
padding-top:15vh;
text-align:center;
margin:66px;
`

const ButtonGroup21=styled.div `
  display:flex;
  margin-bottom:30px;
  @media (max-width:768px) {
    flex-direction: column;
}

`


const LeftButton21=styled.div`
  background-color:rgb(23,26,32,0.8);
  height:40px;
  width:50%;
  color:white;
  display:flex;
  justify-content:center;
  align-items:center;
  border-radius:100px;
  opacity:0.85;
  text-transform:uppercase;
  font-size:12px;
  cursor:pointer;
  margin:8px;
`

const RightButton21=styled(LeftButton21)`

  background:white;
  opacity:0.65;
  color:black;
`

const DownArrow21=styled.img`

  height:40px;
  overflow-x:hidden;
  animation:animateDown infinite 1.5s;
`
const Buttons21=styled.div ``


