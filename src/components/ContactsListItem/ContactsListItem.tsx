import React from 'react';

interface IItem {
  name: string;
  number: string;
}

const ContactsListItem: React.FC<IItem> = ({ name, number }) => {
  return (
    <li>
      <p>{name}</p>
      <p>{number}</p>
    </li>
  );
};

export default ContactsListItem;
