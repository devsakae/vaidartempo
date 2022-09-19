import React, { Component } from "react";
import Acoes from "./components/Acoes";
import Timer from "./components/Timer";
import Header from "./components/Header";
import './App.css'

export default class App extends Component {
  state = {
    total: 0,
    minutos: 0,
    segundos: 0,
    click: false,
  }

  check = (event) => {
    const { target } = event;
    const qto = target.value * 60;
    this.setState((prevState) => ({
      total: target.checked ? Number(prevState.total + qto) : Number(prevState.total - qto),
    }))
  }

  ativaTimer = (event) => {
    event.preventDefault();
    const { click } = this.state;
    if (click) { this.setState({
      click: false,
    })
    }
    else {
      this.setState({
        click: true,
      })
    }
  }

  limpaTudo = () => {
    this.setState({
      total: 0,
    })
  }

  render() {
    const { total, click } = this.state;
    const minutos = Math.floor(total / 60);
    const segundos = total % 60;

    return (
      <main>
        <Header />
        <div className="container">
          <Acoes
            check={ this.check }
            ativaTimer={ this.ativaTimer }
            limpaTudo={ this.limpaTudo }
            botaoIniciar={ click }
          />
          { total > 0 && click ? <Timer
            minutos={ minutos }
            segundos={ segundos }
          /> : (
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
          ) }
        </div>
      </main>
    )
  }
}
