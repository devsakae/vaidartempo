import React, { Component } from 'react';
// Importação graças a ajuda do Washington
const actions = require('../Oquefazer');

export default class Acoes extends Component {
  state = {
    frases: '',
  }

  componentDidMount() {
    const sorteiaAcao = () => {
      const chaves = Object.keys(actions);
      const frases = [];
      for (let i = 0; i < chaves.length; i += 1) {
        const chave = chaves[i];
        const random = Math.floor(Math.random() * actions[chave].length);
        const temp = actions[chave][random];
        frases.push(temp);
      }
      this.setState({
        frases,
      })
    }
    sorteiaAcao();
  }

  render() {
    const { check, ativaTimer, limpaTudo, botaoIniciar } = this.props;
    const { frases } = this.state;
    return (
      <div className="cardapio">
            <form className="form">
              <fieldset className="section">
                <div className="itens">
                  <label htmlFor="um">
                    <div className="item">
                      <div className="item-product">
                        <input
                          id="um"
                          value="1"
                          type="checkbox"
                          onChange={ (e) => check(e) }
                        />
                       { frases[0] }
                      </div>
                      <div className="item-price">1 min</div>
                    </div>
                  </label>

                  <label htmlFor="umemeio">
                    <div className="item">
                      <div className="item-product">
                        <input
                          id="umemeio"
                          value="1.5"
                          type="checkbox"
                          onChange={ (e) => check(e) }
                        />
                       { frases[1] }
                      </div>
                      <div className="item-price">1 min 30 seg</div>
                    </div>
                  </label>

                  <label htmlFor="dois">
                    <div className="item">
                      <div className="item-product">
                        <input
                          id="dois"
                          value="2"
                          type="checkbox"
                          onChange={ (e) => check(e) }
                        />
                       { frases[2] }
                      </div>
                      <div className="item-price">2 min</div>
                    </div>
                  </label>

                  <label htmlFor="doismeio">
                    <div className="item">
                      <div className="item-product">
                        <input
                          id="doismeio"
                          value="2.5"
                          type="checkbox"
                          onChange={ (e) => check(e) }
                        />
                       { frases[3] }
                      </div>
                      <div className="item-price">2 min 30 seg</div>
                    </div>
                  </label>

                  <label htmlFor="tres">
                    <div className="item">
                      <div className="item-product">
                        <input
                          id="tres"
                          value="3"
                          type="checkbox"
                          onChange={ (e) => check(e) }
                        />
                       { frases[4] }
                      </div>
                      <div className="item-price">3 min</div>
                    </div>
                  </label>

                  <label htmlFor="quatro">
                    <div className="item">
                      <div className="item-product">
                        <input
                          id="quatro"
                          value="4"
                          type="checkbox"
                          onChange={ (e) => check(e) }
                        />
                       { frases[5] }
                      </div>
                      <div className="item-price">4 min</div>
                    </div>
                  </label>

                  <label htmlFor="cinco">
                    <div className="item">
                      <div className="item-product">
                        <input
                          id="cinco"
                          value="5"
                          type="checkbox"
                          onChange={ (e) => check(e) }
                        />
                       { frases[6] }
                      </div>
                      <div className="item-price">5 min</div>
                    </div>
                  </label>
                </div>
              </fieldset>
              <div className="rodape">
                <button onClick={ ativaTimer }>{ botaoIniciar ? 'Recomeçar contagem' : 'Iniciar a contagem' }</button>
                <button onClick={ limpaTudo }>Reset</button>
              </div>
            </form>            
          </div>
    )
  }
}
