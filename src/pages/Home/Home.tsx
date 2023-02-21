import React from 'react';
import Filter from 'components/Filter/Filter';
import ContactsList from 'components/ContactsList/ContactsList';

const Home: React.FC = () => {
  return (
    <div>
      Home
      <Filter />
      <ContactsList />
    </div>
  );
};

export default Home;
