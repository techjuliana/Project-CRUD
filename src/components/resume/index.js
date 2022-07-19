import React from 'react'
import { Container } from "./styled";
import {ResumeItem} from "./../resume-item";
import {
  FaRegArrowAltCircleUp,
  FaRegArrowAltCircleDown,
  FaDollarSign,
} from "react-icons/fa";

export const Resume = () => {
  return (
    <Container>
        <ResumeItem 
        title="Entradas" 
        Icon={FaRegArrowAltCircleUp} 
        value="1000" />
        <ResumeItem 
        title="Saidas" 
        Icon={FaRegArrowAltCircleDown} 
        value="1000"/>
        <ResumeItem 
        title="Total" 
        Icon={ FaDollarSign} 
        value="1000"/>
    </Container>
  )
}
