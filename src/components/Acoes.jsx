import React, { Component } from 'react';
import Acao from './Acao';
import AcaoCustom from './AcaoCustom';
// Importação graças a ajuda do Washington
const actions = require('../conteudo/acoes');

export default class Acoes extends Component {
  state = {
    frases: '',
  };

  componentDidMount() {
    const sorteiaAcao = () => {
      const times = Object.keys(actions);
      const frases = [];
      for (let i = 0; i < times.length; i += 1) {
        const content = actions[times[i]].actions[Math.floor(Math.random() * actions[times[i]].actions.length)]
        frases.push({ content: content, value: actions[times[i]].value, name: actions[times[i]].name });
      }
      this.setState({
        frases,
      });
    };
    sorteiaAcao();
  }

  render() {
    const { check } = this.props;
    const { frases } = this.state;
    return (
      <div className='cardapio'>
        <form className='form'>
          <div className='itens'>
            {frases &&
              frases?.map((frase, idx) => (
                <Acao frase={ frase } key={ idx } started={ this.props.started } check={ check } />
                ))}
            <AcaoCustom started={ this.props.started } check={ check } />
          </div>
        </form>
      </div>
    );
  }
}
