import React, { Component } from 'react';

import falta1min from '../conteudo/audios-falta1min';
import fimdotempo from '../conteudo/audios-fimdotempo';

// Pega do LS o array de áudios ainda disponíveis para tocar. Se não existir, inclui todos os áudios.
const allAudios1Min = falta1min.map((audio) => audio.substring(26).split('.')[0]);
let audiosOf1minRemaining = JSON.parse(localStorage.getItem('vaidartempo_audios1min_played')) || allAudios1Min;
if (audiosOf1minRemaining.length < 1) audiosOf1minRemaining = allAudios1Min;

const allAudiosTimeup = fimdotempo.map((audio) => audio.substring(26).split('.')[0]);
let audiosOfTimeupRemaining = JSON.parse(localStorage.getItem('vaidartempo_audiosfim_played')) || allAudiosTimeup;
if (audiosOfTimeupRemaining.length < 1) audiosOfTimeupRemaining = allAudiosTimeup;

// Sorteia um número limitado as opções do tamanho dos arrays (pa = primeiro audio, sa = segundo audio)
const a1Random = Math.floor(Math.random() * audiosOf1minRemaining.length);
const a2Random = Math.floor(Math.random() * audiosOfTimeupRemaining.length);

const getAudio = (audiosArray, audiosRemaining, audioPicked, key) => {
  const audioSearched = audiosRemaining[audioPicked];
  const audioFile = audiosArray.filter((a) => a.includes(audioSearched))[0];
  audiosRemaining.splice(audioPicked, 1);
  localStorage.setItem(key, JSON.stringify(audiosRemaining));
  return audioFile;
};

// Pega o áudio sorteado
let a1Picked = getAudio(falta1min, audiosOf1minRemaining, +a1Random, 'vaidartempo_audios1min_played')
let a2Picked = getAudio(fimdotempo, audiosOfTimeupRemaining, +a2Random, 'vaidartempo_audiosfim_played')

// Cria um áudio pra ele
const a1File = new Audio(a1Picked);
const a2File = new Audio(a2Picked);

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
        this.thankYou(a1Picked, a2Picked);
      }
      if (minutos === 1 && segundos === 2) {
        a1File.play();
        // this.saveInLocal('vaidartempo_audios1min_played', a1Random, allAudios1Min, audiosPlayed1min);
        this.setState({
          checkUserOne: true,
        })
        if (!this.state.showUsers) {
          console.log('execute')
        }
      }
      if (minutos === 0 && segundos === 2) {
        a2File.play();
        // this.saveInLocal('vaidartempo_audiosfim_played', a2Random, allAudiosfinished, audiosPlayedFim);
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
