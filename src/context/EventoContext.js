import React, { Component } from 'react'
import axios from 'axios'

const EventosContex = React.createContext();
export const EventosConsumer = EventosContex.Consumer;

class EventosProvider extends Component {
    token = '4UIODPGTP2TKUUY7WAYX';
    ordernar = 'date'
    state = {
        eventos: []
    }
    obtenerEventos = async (busqueda)=>{
        let url = `https://www.eventbriteapi.com/v3/events/search/?q=${busqueda.nombre}&categories=${busqueda.categoria}&sort_by=${this.ordernar}&token=${this.token}&locale=es_ES`;
        //consultar la API Con la URL
        const evento = await axios.get(url)
    }
    render() {
        return (
            <EventosContex.Provider
                value={{
                    eventos: this.state.eventos,
                    obtenerEventos: this.obtenerEventos
                }}
            >
                {this.props.children}
            </EventosContex.Provider>
        )
    }
}

export default EventosProvider;