import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Acoes from './components/Acoes';
import Timer from './components/Timer';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css'

export default class App extends Component {
  state = {
    total: 0,
    minutos: 0,
    segundos: 0,
    click: false,
    currentTheme: localStorage.getItem('darkMode')
  }

  componentDidMount() {
    document.title = "Hora do intervalo"
  }

  check = (event) => {
    const { total } = this.state;
    const { target } = event;
    if (total === 0 && !target.checked) return;
    const qto = target.value * 60;
    this.setState((prevState) => ({
      total: target.checked ? Number(prevState.total + qto) : Number(prevState.total - qto),
    }))
  }

  ativaTimer = (event) => {
    event.preventDefault();
    this.setState((prevState) => ({
      click: !prevState.click 
    }))
  }

  limpaTudo = () => {
    this.setState({
      total: 0,
    });
    document.location.reload();
  }

  getCurrentTheme = (currentTheme) => {
    this.setState({ currentTheme })
  }

  render() {
    const { total, click, botaoIniciar } = this.state;
    const minutos = Math.floor(total / 60);
    const segundos = total % 60;

    return (
      <div className={ this.state.currentTheme }>
      <Header
      startado={ !click }
      minutos={ minutos }
      />
      <Container>
          { total > 0 && click ? <Timer
            minutos={ minutos }
            segundos={ segundos }
            ativaTimer={ this.ativaTimer }
            limpaTudo={ this.limpaTudo }
            botaoIniciar={ click }
          /> : (
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
                  onClick={ this.ativaTimer }
                  disabled={ total === 0 }
                >
                  { botaoIniciar ? '(Cancelar)' : 'Iniciar' }
                </button>
                <button onClick={ this.limpaTudo }>
                    Ctrl + Alt + Del
                </button>
              </div>
            </div>
        ) }
          <Acoes check={ this.check }/>
        </Container>
      <Footer getCurrentTheme={this.getCurrentTheme} />
      </div>
    )
  }
}
