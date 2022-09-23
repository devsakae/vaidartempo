import React, { Component } from 'react';
import Quotes from '../components/Quotes';

export default class Header extends Component {  
  render() {
    const { startado, minutos } = this.props;
    return (
      <header>
        <h3>Hora do intervalo</h3>
        { startado ? (<p className="quotainer">Para dar tempo de...</p>)
        /* Aqui embaixo será inserido o <Quotes minutos={ minutos } /> */
        : (<Quotes minutos={ minutos } />)
        }
      </header>
    )
  }
}
