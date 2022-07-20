import styled from "styled-components";

export const Container = styled.div`
  max-width: 200rem;
  width: 98%;
  display: flex;
  margin: 0 auto;
  gap: 20px;
  margin-top: 2rem;
  justify-content: space-around;
  svg{
    color:var(--purple);
  }

  @media (max-width:500px){
    flex-direction: column;
  }
`;
