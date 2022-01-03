import PropTypes from "prop-types";
import { TableBody, TableBodyComponents } from "./Transactions.styled";

export default function Transaction({ type, amount, currency }) {
  return (
    <TableBody>
      <TableBodyComponents>{type}</TableBodyComponents>
      <TableBodyComponents>{amount}</TableBodyComponents>
      <TableBodyComponents>{currency}</TableBodyComponents>
    </TableBody>
  );
}

Transaction.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
