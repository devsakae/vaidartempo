import React, { Component } from 'react';

export default class Acao extends Component {
  render() {
    const { content, value, name } = this.props.frase;
    return (
      <label htmlFor={ this.props.value }>
        <div className='item'>
          <div className='item-product'>
            <input
              id={ this.props.idx }
              value={ value }
              type='checkbox'
              disabled={ this.props.started }
              onChange={(e) => this.props.check(e)}
            />
            { content }
          </div>
          <div className='item-price'>{ name }</div>
        </div>
      </label>
    );
  }
}
