import styled from "styled-components";

export const Container = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--white);
  border-radius: 5px;
  padding: 5px 15px;

  @media (max-width: 800px) {
    width: 98%;
    padding: 5px 5px;
    p {
      font-size: 15px;
    }
    span {
      font-size: 20px;
    }
  }
`;
export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  gap: 10px;
  margin: 20px auto;
  svg {
    width: 25px;
    height: 25px;
  }
`;
export const HeaderTitle = styled.p`
  font-size: 20px;
`;
export const Total = styled.span`
  font-size: 30px;
  font-weight: bold;
  margin: 20px auto;
`;
