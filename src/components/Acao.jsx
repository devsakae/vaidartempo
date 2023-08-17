import React, { Component } from 'react';

export default class Acao extends Component {
  state = {
    selected: false,
  }

  selection = (e) => {
    this.props.check(e);
    this.setState(prev => ({ ...prev, selected: !prev.selected }))
  }

  render() {
    const { content, value, name } = this.props.frase;


    return (
      <label htmlFor={ this.props.value }>
        <div className={ `item ${this.state.selected && 'selected'}` }>
          <div className='item-product'>
            <input
              id={ this.props.idx }
              value={ value }
              type='checkbox'
              disabled={ this.props.started }
              onChange={(e) => this.selection(e)}
            />
            { content }
          </div>
          <div className='item-price'>{ name }</div>
        </div>
      </label>
    );
  }
}
