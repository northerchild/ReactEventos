import React, { Component } from 'react'

const EventosContex = React.createContext();
export const EventosConsumer = EventosContex.Consumer;

class EventosProvider extends Component {
    token = '4UIODPGTP2TKUUY7WAYX';
    ordernar = 'date'
    state = {}
    obtenerEventos = async (busqueda)=>{
        let url = `https://www.eventbriteapi.com/v3/events/search/?q=${busqueda.nombre}&categories=${busqueda.catgoria}&sort_by=${this.ordernar}&token=${this.token}&locale=es_ES`;
    }
    render() {
        return ()
    }
}

export default EventosProvider;