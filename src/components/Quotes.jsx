import React, { Component } from 'react';
import quotes from '../conteudo/quotes'; 

export default class Quotes extends Component {
  state = {
    totalDeQuotes: [],
    showQuotes: false,
    random: 0,
  }

  yes = () => {
    const totalDeQuotes = [];
    const { minutos } = this.props;
    for (let i = -1; i < minutos; i += 1) {
      const random = Math.floor(Math.random() * 1000);
      totalDeQuotes.push(quotes['tech'][random]);
    }
    this.setState({
      quotes: totalDeQuotes,
      showQuotes: true,
    })
    setInterval(() => {
      this.setState(prevState => ({
        random: prevState.random + 1,
      }))
    }, 60000)
  }

  startIn = (sec) => {
    setTimeout(() => this.yes(), sec * 1000)
  }

  render() {
    const { showQuotes, quotes, random } = this.state;
    return (
      <div className="quotainer">
        { showQuotes ? (<blockquote className='tech fadeinquote'>{ quotes[random] }</blockquote>) : (
          <>
            <div>
              Enquanto aguarda, vou mostrar frases inspiracionais a não ser que você cancele ok?
            </div>
            <div>
              <button onClick={ () => this.yes() }>Sim</button>
              <button onClick={ () => this.yes() }>Não vou cancelar</button>
              { this.startIn(5) }
            </div>
          </>
        ) }
      </div>
    )
  }
}
