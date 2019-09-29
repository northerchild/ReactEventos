import React from 'react';
import Header from './components/Header'
import CategoriasProvider from './context/CategoriaContex';
import EventosProvider from './context/EventoContext';
import Formulario from './components/Formulario'

function App() {
  return (
    <EventosProvider>
    <CategoriasProvider>
    <Header />
    <div className="uk-container">
      <Formulario />
    </div>
    
    </CategoriasProvider>
    </EventosProvider>
  );
}

export default App;
