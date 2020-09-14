import React, { useContext } from 'react';
import { ItemContext } from '../contexts/ItemContext';

const ItemDetailComponent = ({ item }) => {
  const { dispatch } = useContext(ItemContext);
  return (
    <li onClick={() => dispatch({type:'REMOVE_ITEM', id:item.id})}>
      <div className="title">{item.title}</div>
      <div className="author">{item.author}</div>
    </li>
  );
};

export default ItemDetailComponent;
