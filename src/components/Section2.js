import React from 'react'
import styled from "styled-components"
import Section21 from "./Section21"
import Section22 from './Section22'
function Section2({title3,description3,leftBtnText3,rightBtnText3,backgroundImg3,title4,description4,leftBtnText4,rightBtnText4,backgroundImg4})
{



  return (
      <Wrap>
    <Section21 
                      title21= {title3}
                      description21 = {description3}
                      backgroundImg21= {backgroundImg3}
                      leftBtnText21= {leftBtnText3}
                      rightBtnText21= {rightBtnText3}
            />

            <Section22 
            title22= {title4}
            description22 = {description4}
            backgroundImg22= {backgroundImg4}
            leftBtnText22= {leftBtnText4}
            rightBtnText22= {rightBtnText4}
  />
  </Wrap>

  )
}
export default Section2
const Wrap=styled.div`
width:100 vw;
height:100 vh;
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