import React, { Component } from 'react';

// Falta 1 minuto
import min01a from '../conteudo/audio-falta1min01.mp3';
import min01b from '../conteudo/audio-falta1min02.mp3';
import aline from '../conteudo/audio-aline.mp3';
import thiagolopes01 from '../conteudo/audio-thiagolopes-falta1min.mp3';

// Acabou o tempo
import lele1 from '../conteudo/audio01.mp3';
import lele2 from '../conteudo/audio02.mp3';
import lele3 from '../conteudo/audio03.mp3';
import ernani from '../conteudo/audio04.ogg';
import isa from '../conteudo/audio05.ogg';
import uoxton from '../conteudo/audio06.ogg';
import cris from '../conteudo/audio07.ogg';
import maite from '../conteudo/audio-maite.mp3';
import thiagolopes02 from '../conteudo/audio-thiagolopes-fim.mp3';
import carolinalima from '../conteudo/audio-carolina.mp3';

export default class Timer extends Component {
  state = {
    minutos: 0,
    segundos: 0,
  }

  componentDidMount() {
    const { minutos, segundos } = this.props;
    const quase = [min01a, aline, min01b, thiagolopes01];
    const quaseRandom = Math.floor(Math.random() * quase.length);
    const primeiroAudio = new Audio(quase[quaseRandom]);
    const fins = [lele1, ernani, lele2, isa, uoxton, lele3, cris, maite, thiagolopes02, carolinalima];
    const finsRandom = Math.floor(Math.random() * fins.length);
    const segundoAudio = new Audio(fins[finsRandom]);
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
      if (minutos === 1 && segundos === 2) primeiroAudio.play();
      if (minutos === 0 && segundos === 2) segundoAudio.play();
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

  componentWillUnmount() {
    clearInterval(this.myInterval)
  }

  render() {
    const { minutos, segundos } = this.state;
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
      </div>
    )
  }
}
