import React, { createContext, useState } from 'react';
import uuid from 'uuid/v1';

export const ItemContext = createContext();

const ItemContextProvider = props => {
  const [items, setItems] = useState([
    { title: 'name of the wind', author: 'patrick rothfuss', id: 1 },
    { title: 'the final empire', author: 'brandon sanderson', id: 2 }
  ]);
  const addItem = (title, author) => {
    setItems([...items, { title, author, id: uuid() }]);
  };
  const removeItem = id => {
    setItems(items.filter(item => item.id !== id));
  };

  return (
    <ItemContext.Provider value={{ items, addItem, removeItem }}>
      {props.children}
    </ItemContext.Provider>
  );
};

export default ItemContextProvider;
