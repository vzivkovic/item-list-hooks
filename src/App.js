import React from 'react';
import NavbarComponent from './components/Navbar.component';
import ItemContextProvider from './contexts/ItemContext';

function App() {
  return (
    <div className="App">
      <ItemContextProvider>
        <NavbarComponent />
      </ItemContextProvider>
    </div>
  );
}

export default App;
