import React, { Component } from 'react';
/* import Quotes from '../components/Quotes'; */

export default class Header extends Component {  
  render() {
    const { startado } = this.props;
    return (
      <div className="header">
        <h3>Hora do intervalo</h3>
        { startado ? (<p>Vai dar tempo de...</p>)
        /* Aqui embaixo será inserido o <Quotes minutos={ minutos } /> */
        : (<p>Timer iniciado!</p>)
        }
      </div>
    )
  }
}
