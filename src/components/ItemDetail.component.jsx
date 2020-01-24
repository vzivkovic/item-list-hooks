import React, { useContext } from 'react';
import { ItemContext } from '../contexts/ItemContext';

const ItemDetailComponent = ({ item }) => {
  const { removeItem } = useContext(ItemContext);
  return (
    <li onClick={() => removeItem(item.id)}>
      <div className="title">{item.title}</div>
      <div className="author">{item.author}</div>
    </li>
  );
};

export default ItemDetailComponent;
