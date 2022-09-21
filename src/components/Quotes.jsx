import React, { Component } from 'react';
import quotes from '../conteudo/quotes'; 

export default class Quotes extends Component {
  state = {
    totalDeQuotes: [],
  }

  componentDidMount() {
    const totalDeQuotes = [];
    const { minutos } = this.props;
    const random = Math.floor(Math.random() * 1000);
    for (let i = 0; i < minutos; i += 1) { totalDeQuotes.push(quotes['tech'][random]); }
    console.log(totalDeQuotes);
    this.setState({
      quotes: totalDeQuotes,
    })
  }

  render() {
    return (
      <div className="quotainer">
        <div>
          Enquanto aguarda, que tal mostrar frases?
        </div>
        <div>
          <button onClick={ () => this.getQuotes() }>Inspiracionais</button>
          <button>I can haz joke</button>
          <button>Movie quotes</button>
        </div>
      </div>
    )
  }
}
