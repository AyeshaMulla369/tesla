import React from 'react'
import styled from "styled-components"
function Section22({title22,description22,leftBtnText22,rightBtnText22,backgroundImg22}) {



  return (
    <Wrap bgImage={backgroundImg22}>

    <ItemText22>
      <h1>
        {title22}
      </h1>
      <p>{description22}</p>
    </ItemText22>
    <Buttons22> <ButtonGroup22>
        <LeftButton22>
            {leftBtnText22}
        </LeftButton22>
        {rightBtnText22 &&
                <RightButton22>
                {rightBtnText22}
            </RightButton22>
        
        }


    </ButtonGroup22>
    <DownArrow22 src="/images/down-arrow.svg"></DownArrow22>
    </Buttons22>
   
    </Wrap>
  )
}

export default Section22

const Wrap=styled.div`
width:25%;
height:25%;
background-size:cover;
background-position:center;
background-repeat: no-repeat;
display:flex;
flex-direction:column;
justify-content:space-between;   //vertical 
align-items:center; //horizontal
background-image: ${props => `url("/images/${props.bgImage}")`
}};

`


const ItemText22=styled.div`
padding-top:15vh;
text-align:center;
margin-bottom:100px;
margin-top:-100px;
`

const ButtonGroup22=styled.div `
  display:flex;
  margin-bottom:30px;
  @media (max-width:768px) {
    flex-direction: column;
}

`


const LeftButton22=styled.div`
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

const RightButton22=styled(LeftButton22)`

  background:white;
  opacity:0.65;
  color:black;
`

const DownArrow22=styled.img`

  height:40px;
  overflow-x:hidden;
  animation:animateDown infinite 1.5s;
`
const Buttons22=styled.div ``


