// import "./App.css";
import SocialProfileCards from "./components/profile/SocialProfileCards";
import cardProfile from "./components/profile/usre.json";
import Section from "./components/statistics/Section";
import data from "./components/statistics/data.json";
import StatisticsList from "./components/statistics/statisticsList";
import FriendList from "./components/friendList/friendList";
import friends from "./components/friendList/friends.json";
import TransactionHistory from "./components/transactions/TransactionHistory";
import transactions from "./components/transactions/transactions.json";
import Table from "./components/transactions/Table";

const profile = cardProfile;

export default function App() {
  return (
    <div>
      <SocialProfileCards
        key={profile.tag}
        username={profile.username}
        tag={profile.tag}
        location={profile.location}
        avatar={profile.avatar}
        stats={profile.stats}
      />
      <Section title="Upload stats">
        <StatisticsList items={data} />
      </Section>
      <Section>
        <StatisticsList items={data} />
      </Section>
      <FriendList friends={friends} />
      <Table>
        <TransactionHistory items={transactions} />
      </Table>
      ;
    </div>
  );
}
