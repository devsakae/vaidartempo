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
    for (let i = 0; i < minutos; i += 1) {
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

  render() {
    const { showQuotes, quotes, random } = this.state;
    return (
      <div className="quotainer">
        { showQuotes ? (<blockquote className='tech'>{ quotes[random] }</blockquote>) : (
          <>
            <div>
              Enquanto aguarda, quer mostrar frases inpiracionais?
            </div>
            <div>
              <button onClick={ () => this.yes() }>Sim</button>
              <button onClick={ () => this.yes() }>Claro</button>
            </div>
          </>
        ) }
      </div>
    )
  }
}
