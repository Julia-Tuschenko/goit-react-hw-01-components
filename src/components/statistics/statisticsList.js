import Statistics from "./Statistics";

export default function StatisticsList({ items }) {
  return (
    <ul class="stat-list">
      {items.map((item) => (
        <Statistics
          key={item.id}
          label={item.label}
          percentage={item.percentage}
        />
      ))}
    </ul>
  );
}
