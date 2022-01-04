import Transaction from './Transaction';
import PropTypes from 'prop-types';

export default function TransactionHistory({ items }) {
  return items.map(item => (
    <Transaction
      key={item.id}
      type={item.type}
      amount={item.amount}
      currency={item.currency}
    />
  ));
}

TransactionHistory.propTypes = {
  key: PropTypes.string.isRequired,
};
