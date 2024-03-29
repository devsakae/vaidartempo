import React, { Component } from 'react';

export default class AcaoCustom extends Component {
  state = {
    minutes: 30,
    adding: false,
  };

  addMinutes = (e) => {
    if (+e.target.value > 999) return alert('Valor máximo é 999');
    this.setState({ minutes: e.target.value });
  };

  changingCustom = (e) => {
    this.setState((prev) => ({ ...prev, adding: !prev.adding }));
    this.props.check(e);
  };

  render() {
    return (
      <label htmlFor='custom'>
        <div className={ `item ${this.state.adding && 'selected'}` }>
          <div className='item-product'>
            <input
              id='custom'
              type='checkbox'
              value={this.state.minutes}
              disabled={this.props.started}
              // checked={ this.state.adding }
              onChange={(e) => this.changingCustom(e)}
            />
            Preciso de mais
            <input
              className='customInput'
              type='number'
              pattern='\d*'
              value={this.state.minutes}
              disabled={this.state.adding}
              onChange={(e) => this.addMinutes(e)}
            />
            minutos
          </div>
        </div>
      </label>
    );
  }
}
