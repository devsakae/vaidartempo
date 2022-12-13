import React, { Component } from 'react';

import falta1min from '../conteudo/audios-falta1min';
import fimdotempo from '../conteudo/audios-fimdotempo';

export default class Timer extends Component {
  state = {
    minutos: 0,
    segundos: 0,
    showUsers: false,
    users: [],
    checkUserOne: false,
    checkUserTwo: false,
  }

  componentDidMount() {
    const { minutos, segundos } = this.props;

    // Sorteia um número limitado as opções do tamanho dos arrays (pa = primeiro audio, sa = segundo audio)
    const paRandom = Math.floor(Math.random() * falta1min.length);
    const saRandom = Math.floor(Math.random() * fimdotempo.length);

    // Pega o áudio sorteado
    const paSorteado = falta1min[paRandom];
    const saSorteado = fimdotempo[saRandom];

    // Cria um áudio pra ele
    const paFile = new Audio(paSorteado);
    const saFile = new Audio(saSorteado);
    this.setState({
      minutos,
      segundos,
    })
    this.myInterval = setInterval(() => {
      const { minutos, segundos } = this.state;
      if (segundos > 0) {
          this.setState(({ segundos }) => ({
            segundos: segundos - 1
          }))
      }
      if (minutos === 1 && segundos === 20) {
        this.thankYou(paSorteado, saSorteado);
      }
      if (minutos === 1 && segundos === 2) {
        paFile.play();
        this.setState({
          checkUserOne: true,
        })
        if (!this.state.showUsers) {
          console.log('execute')
        }
      }
      if (minutos === 0 && segundos === 2) {
        saFile.play();
        this.setState({
          checkUserTwo: true,
        })
      }
      if (segundos === 0) {
        if (minutos === 0) {
            clearInterval(this.myInterval)
        } else {
            this.setState(({ minutos }) => ({
                minutos: minutos - 1,
                segundos: 59
            }))
        }
      } 
    }, 1000)
  }

  thankYou = (arg1, arg2) => {
    const userone = arg1.substring(26).split('.')[0];
    const usertwo = arg2.substring(26).split('.')[0];
    this.setState({
      showUsers: true,
      users: [userone, usertwo]
    })
  };

  componentWillUnmount() {
    clearInterval(this.myInterval)
  }

  render() {
    const { minutos, segundos, showUsers, users, checkUserOne, checkUserTwo } = this.state;
    const { ativaTimer, limpaTudo, botaoIniciar } = this.props;
    return (
      <div className="container-col">
        <div className="cronometro">
          <div className="clock-container">
            <div className="clock-column">
              <p className="clock-minutes clock-timer">{ minutos }</p>
              <p className="clock-label">MINUTOS</p>
            </div>
            <div className="clock-column">
              <p className="clock-seconds clock-timer">{ segundos }</p>
              <p className="clock-label">SEGUNDOS</p>
            </div>
          </div>
        </div>
        <div className="rodape">
          <button
            onClick={ ativaTimer }
          >
            { botaoIniciar ? '(Cancelar)' : 'Iniciar' }
          </button>
          <button onClick={ limpaTudo }>
              Ctrl + Alt + Del
          </button>
        </div>
        { showUsers && (
        <div className="agradecimentos">
          <div>
            <h2>Áudios de:</h2>
          </div>
          <div>
            <ul>
              <li><i className="bi bi-github"></i> { users[0] } { ' ' } { checkUserOne && (<i className="bi bi-check-all"></i>) }</li>
              <li><i className="bi bi-github"></i> { users[1] } { ' ' } { checkUserTwo && (<i className="bi bi-check-all"></i>) }</li>
            </ul>
          </div>
        </div>
        ) }
      </div>
    )
  }
}
