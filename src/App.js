import React from 'react';
import Header from './components/Header'
import CategoriasProvider from './context/CategoriaContex';
import Formulario from './components/Formulario'

function App() {
  return (
    <CategoriasProvider>
    <Header />
    <div className="uk-container">
      <Formulario />
    </div>
    
    </CategoriasProvider>
  );
}

export default App;
