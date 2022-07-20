import React from "react";
import { Table, Th, Thead, Tr,Tbody } from "./styled";
import {GridItem} from "../grid-item";

export 

const Grid = ({ itens, setItens }) => {
  const onDelete = (ID) => {
    const newArray = itens.filter((transaction) => transaction.id !== ID);
    setItens(newArray);
    localStorage.setItem("transactions", JSON.stringify(newArray));
  };

  return (
    <Table>
      <Thead>
        <Tr>
          <Th width={40}>Descrição</Th>
          <Th width={40}>Valor</Th>
          <Th width={10} alignCenter>
            Tipo
          </Th>
          <Th width={10}></Th>
        </Tr>
      </Thead>
      <Tbody>
        {itens?.map((item, index) => (
          <GridItem key={index} item={item} onDelete={onDelete} />
        ))}
      </Tbody>
    </Table>
  );
}