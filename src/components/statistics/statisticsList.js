import Statistics from './Statistics';
import { StatList } from './Statistics.styled';
import PropTypes from 'prop-types';

export default function StatisticsList({ items }) {
  return (
    <StatList>
      {items.map(item => (
        <Statistics
          key={item.id}
          label={item.label}
          percentage={item.percentage}
        />
      ))}
    </StatList>
  );
}

StatisticsList.propTypes = {
  key: PropTypes.string.isRequired,
};
