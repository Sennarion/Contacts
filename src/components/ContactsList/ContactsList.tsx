import React from 'react';
import ContactsListItem from 'components/ContactsListItem/ContactsListItem';

const arr = [
  {
    name: 'Irvin Kiehn',
    number: '603-730-8804',
    id: '11',
  },
  {
    name: 'Maxine Lind',
    number: '973-523-2611',
    id: '12',
  },
  {
    name: 'Miss Herbert Hodkiewicz',
    number: '461-843-7744',
    id: '13',
  },
  {
    name: 'Homer Beatty',
    number: '596-984-9101',
    id: '14',
  },
  {
    name: 'Lyle Williamson',
    number: '555-225-2485',
    id: '15',
  },
  {
    name: 'Jan Barton',
    number: '236-634-3630',
    id: '16',
  },
  {
    name: 'Janice Bruen',
    number: '229-337-7921',
    id: '17',
  },
  {
    name: 'Kristi Langosh',
    number: '386-454-9626',
    id: '18',
  },
  {
    name: 'NIX Solutions',
    number: '+380999999999',
    id: '19',
  },
];

const ContactsList: React.FC = () => {
  return (
    <ul>
      {arr.map(({ id, name, number }) => {
        return <ContactsListItem key={id} name={name} number={number} />;
      })}
    </ul>
  );
};

export default ContactsList;
