import React from 'react'
import styled from "styled-components"
import Section from "./Section"
import Section1 from './Section1'
import Section2 from './Section2'
function home() {
  return (
    <Container>
          <Section1
            title1="Model S"
            description1="Order Online for Touchless Delievery"
            backgroundImg1="model-s.jpg"
            leftBtnText1="Custom Order"
            rightBtnText1="Existing Inventory"
            
                      title2="Model Y"
                      description2="Order Online for Touchless Delievery"
                      backgroundImg2="model-y.jpg"
                      leftBtnText2="Custom Order"
                      rightBtnText2="Existing Inventory"
            />
      <Section2
                      title3="Model 3"
                      description3="Order Online for Touchless Delievery"
                      backgroundImg3="model-3.jpg"
                      leftBtnText3="Custom Order"
                      rightBtnText3="Existing Inventory"
            
                        title4="Model X"
                        description4="Order Online for Touchless Delievery"
                        backgroundImg4="model-x.jpg"
                        leftBtnText4="Custom Order"
                        rightBtnText4="Existing Inventory"
              />
       <Section
                      title="Lowest Costing solar panel in World"
                      description="Money Back Guranteed"
                      backgroundImg="solar-panel.jpg"
                      leftBtnText="Order Now"
                      rightBtnText="Learn More"
            />
                <Section
                      title="Solar Roof "
                      description="Produce Clean Energy From Your Roof "
                      backgroundImg="solar-roof.jpg"
                      leftBtnText="Shop Now"
                      rightBtnText="Learn More"
            />
                <Section
                      title="Accessories"
                      description=""
                      backgroundImg="accessories.jpg"
                      leftBtnText="Shop Now"
                     
            />
    </Container>
  )
}

export default home
const Container =styled.div`
  height: 100vh;
  `