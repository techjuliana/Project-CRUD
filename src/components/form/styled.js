import styled from "styled-components";

export const Container = styled.div`
  max-width: 95%;
  margin: 20px auto;
  width: 98%;
  background-color: var(--white);
  box-shadow: 0px 0px 5px #ccc;
  border-radius:5px;
  display:flex;
  justify-content: space-around;
  padding: 15px 0px;
  gap: 10px;
  @media (max-width:800px){
  display: grid;
  }
`

export const InputContent = styled.div`
  display:flex;
  flex-direction: column;
`

export const Label = styled.label`
`

export const Input = styled.input`
outline: none;
border-radius:5px;
padding: 5px 10px;
font-size: 15px;
border: 1px solid #ccc;
`
export const RadioGroup = styled.div`
display:flex;
align-items: center;
input{
    margin-left: 20px;
    margin-right:5px;
    accent-color:var(--purple);
    margin-top:0;
}
`

export const Button = styled.button`
border-radius:5px;
padding: 5px 10px;
border: none;
cursor: pointer;
color: var(--white);
background-color: var(--purple);
`