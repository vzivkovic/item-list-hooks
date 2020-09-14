import React, {createContext, useReducer, useState} from 'react';
import {ItemReducer} from "../reducers/ItemReducer";

export const ItemContext = createContext();

const ItemContextProvider = props => {

  const [items, dispatch] = useReducer(ItemReducer,[
    { title: 'name of the wind', author: 'patrick rothfuss', id: 1 },
    { title: 'the final empire', author: 'brandon sanderson', id: 2 }
  ]);

  return (
    <ItemContext.Provider value={{ items, dispatch }}>
      {props.children}
    </ItemContext.Provider>
  );
};

export default ItemContextProvider;
