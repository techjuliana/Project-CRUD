import React, { useState } from "react";
import { Container, InputContent, Label, Input, RadioGroup, Button } from "./styled";

export const Form = ({handleAdd}) => {
  const [desc, setDesc] = useState("");
  const [amount, setAmount] = useState("");
  const [isExpense, setExpense] = useState(false);

  const generateID = () => Math.round(Math.random()* 1000)

  const handleSave = () => {
    if (!desc || !amount) {
      alert(" informe a descrição e o valor :( ");
      return;
     }else if (amount <1) {
      alert("O valor precisa ser positivo!");
      }

  const transaction = {
    id: generateID (),
    desc: desc,
    amount: amount,
    expense: isExpense,
  };
  
  handleAdd(transaction);

  setDesc("");
  setAmount("");

};

  return (
  <Container>
    <InputContent>
    <Label>descrição</Label>
    <Input 
    value={desc} 
    onChange={(e) => setDesc(e.target.value)}/>
    </InputContent>
    <InputContent>
    <Label>Valor</Label>
    <Input  
    value={amount} 
    type= "number" 
    onChange={(e) => setAmount(e.target.value)}/>
    </InputContent>
    <RadioGroup>
      <Input 
      type="radio"
      id="rIncome"
      defaultChecked
      name="group1"
      onChange={()=> setExpense(!isExpense)}
      />
      <Label htmlFor="rIncome"> Entrada </Label>
      <Input 
      type="radio"
      id="rIncome"
      defaultChecked
      name="group1"
      onChange={()=> setExpense(!isExpense)}
      />
      <Label htmlFor="rIncome"> Saída </Label>
    </RadioGroup>
    <Button onClick={handleSave}>Adicionar</Button>
  </Container>
  );
};
