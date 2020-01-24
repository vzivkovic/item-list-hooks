import React, { useContext, useState } from 'react';
import { ItemContext } from '../contexts/ItemContext';

const ItemFormComponent = () => {
  const { addItem } = useContext(ItemContext);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const handleSubmit = e => {
    e.preventDefault();
    addItem(title, author);
    setTitle('');
    setAuthor('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Item title"
        value={title}
        onChange={e => setTitle(e.target.value)}
        required
      />

      <input
        type="text"
        placeholder="Item author"
        value={author}
        onChange={e => setAuthor(e.target.value)}
        required
      />
      <input type="submit" value="add Item" />
    </form>
  );
};

export default ItemFormComponent;
