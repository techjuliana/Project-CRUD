import styled from "styled-components";

export const Table = styled.table`
  max-width: 200rem;
  width: 95%;
  background: var(--white);
  padding: 20px;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
  margin: 20px auto;
`;

export const Th = styled.th`
  border-bottom: inset;
  padding-bottom: 5px;
  text-align: ${(props) => (props.alignCenter ? "center" : "start")};
  width: ${(props) => (props.width ? props.width + "%" : "auto")};
`;

export const Tbody = styled.tbody``;
export const Thead = styled.thead``;
export const Tr = styled.tr``;