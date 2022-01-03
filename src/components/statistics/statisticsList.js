import Statistics from "./Statistics";
import { StatList } from "./Statistics.styled";

export default function StatisticsList({ items }) {
  return (
    <StatList>
      {items.map((item) => (
        <Statistics
          key={item.id}
          label={item.label}
          percentage={item.percentage}
        />
      ))}
    </StatList>
  );
}
