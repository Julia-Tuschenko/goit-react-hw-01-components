import SocialProfileCards from '../Profile/SocialProfileCards';
import cardProfile from '../../data/User.json';
import Section from '../Statistics/Section';
import data from '../../data/Data.json';
import StatisticsList from '../Statistics/StatisticsList';
import FriendList from '../FriendList/FriendList';
import friends from '../../data/Friends.json';
import TransactionHistory from '../Transactions/TransactionHistory';
import transactions from '../../data/Transactions.json';
import Table from '../Transactions/Table';
import { Container } from './App.styled';
const profile = cardProfile;

export default function App() {
  return (
    <Container>
      <SocialProfileCards
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
    </Container>
  );
}
