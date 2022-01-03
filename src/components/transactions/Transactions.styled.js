import styled from "@emotion/styled";

export const TransactionHistory = styled.table`
  table-layout: fixed;
  width: 75%;
  border-collapse: collapse;
  margin: 40px auto 0px;
  border: 1px solid grey;
`;

export const TableHeader = styled.tr`
  background-color: cornflowerblue;
  color: white;
`;

export const TableComponents = styled.th`
  padding: 20px;
  border: 1px solid grey;
`;
export const TableBody = styled.tr`
  :nth-of-type(odd) {
    background-color: aliceblue;
  }
  :nth-of-type(even) {
    background-color: ainsboro;
  }
`;

export const TableBodyComponents = styled.td`
  padding: 20px;
  text-align: center;
  border: 1px solid grey;
`;
