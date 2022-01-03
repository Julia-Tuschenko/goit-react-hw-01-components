import {
  TransactionHistory,
  TableHeader,
  TableComponents,
} from "./Transactions.styled";

export default function Table({ children }) {
  return (
    <TransactionHistory>
      <thead>
        <TableHeader>
          <TableComponents>Type</TableComponents>
          <TableComponents>Amount</TableComponents>
          <TableComponents>Currency</TableComponents>
        </TableHeader>
      </thead>

      <tbody>{children}</tbody>
    </TransactionHistory>
  );
}
