import React from 'react';
import Header from './components/Header'
import CategoriasProvider from './context/CategoriaContex';

function App() {
  return (
    <CategoriasProvider>
    <Header />
    </CategoriasProvider>
  );
}

export default App;
