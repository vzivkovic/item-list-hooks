import React, { useContext } from 'react';
import { ItemContext } from '../contexts/ItemContext';

const NavbarComponent = () => {
  const { items } = useContext(ItemContext);
  return (
    <div className="navbar">
      <h1>Items List</h1>
      <p>Currently you have {items.length} items to get through...</p>
    </div>
  );
};

export default NavbarComponent;
