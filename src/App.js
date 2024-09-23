import React, { useState } from 'react';
import './App.css';
import Container from './components/Container';
import FormItem from './components/FormItem';
import ItemList from './components/ItemList';

function App() {
  const [items, setItems] = useState([]);

  const handleAddItem = (item) => {
    setItems([...items, item]);
  };

  return (
    <Container>
      <h1>Lista de itens</h1>
      <FormItem onAddItem={handleAddItem} />
      <ItemList items={items} />
    </Container>
  );
}

export default App;