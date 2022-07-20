import React from 'react'
import { Container } from "./styled";
import {ResumeItem} from "./../resume-item";
import {
  FaRegArrowAltCircleUp,
  FaRegArrowAltCircleDown,
  FaDollarSign,
} from "react-icons/fa";

export const Resume = ({ income, expense, total }) => {
  return (
    <Container>
      <ResumeItem
        title="Entradas"
        color="green"
        Icon={FaRegArrowAltCircleUp }
        value={income}
      />
      <ResumeItem
        title="Saídas"
        Icon={FaRegArrowAltCircleDown}
        value={expense}
      />
      <ResumeItem title="Total" Icon={FaDollarSign} value={total} />
    </Container>
  );
};