import React from 'react'
import Button from './Button';
import nerdImage from '../Styles/nerdImage.png';
import { CardContainer, ContentContainer, ButtonContainer } from './Container.Styles'
import {Tag, H1, P, Image} from './Elements.Styles'
import {StyledTitle} from '../Styles/Custom.Styles'

export default function Card (){
    return (
        <> 
        <CardContainer>
        <ContentContainer>

         <Tag color= '#4361ee'> exclusive  </Tag>
         <H1> <StyledTitle text='this is something about bigger' color='#fff'/> </H1>
         <P> Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, esse! Natus sunt quaerat tempore animi est corrupti, commodi voluptates distinctio?</P>
        <ButtonContainer>
                    <Button link="https://lwsbd.link/rsc" text="Watch now" />
                    <Button link="https://lwsbd.link/react" text="Github repo" />
        </ButtonContainer>
         </ContentContainer>
           <Image src={nerdImage} alt="Nerd" width="300px" />
         </CardContainer>
        </>
    )
} 