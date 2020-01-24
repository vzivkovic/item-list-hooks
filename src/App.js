import React from 'react';
import NavbarComponent from './components/Navbar.component';
import ItemContextProvider from './contexts/ItemContext';
import ItemListComponent from './components/ItemList.component';
import ItemFormComponent from './components/ItemForm.component';

function App() {
  return (
    <div className="App">
      <ItemContextProvider>
        <NavbarComponent />
        <ItemListComponent />
        <ItemFormComponent />
      </ItemContextProvider>
    </div>
  );
}

export default App;
