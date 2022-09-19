import React, { Component } from 'react';

export default class Timer extends Component {
  state = {
    minutos: 0,
    segundos: 0,
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
      if (minutos === 1 && segundos === 1) console.log('falta 1 minuto')
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
    return (
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

    )
  }
}
