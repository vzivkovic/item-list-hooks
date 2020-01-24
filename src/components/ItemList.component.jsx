import React, { useContext } from 'react';
import { ItemContext } from '../contexts/ItemContext';
import ItemDetail from './ItemDetail.component';

const ItemListComponent = () => {
  const { items } = useContext(ItemContext);

  return items.length ? (
    <div className="item-list">
      <ul>
        {items.map(item => {
          return <ItemDetail item={item} key={item.id} />;
        })}
      </ul>
    </div>
  ) : (
    <div className="empty">No found 404</div>
  );
};

export default ItemListComponent;
