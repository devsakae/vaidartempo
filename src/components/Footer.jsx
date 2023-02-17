import React, { Component } from 'react';

export default class Footer extends Component {
  state = {
    checkedSwitch: localStorage.getItem('darkMode') === 'dark',
  }

  setLocalStorage = () => {
    const currentValue = localStorage.getItem('darkMode');
    if (!currentValue || currentValue === 'light') {
      localStorage.setItem('darkMode', 'dark');
      this.setState({checkedSwitch: true});
      this.props.getCurrentTheme('dark');
    } else {
      localStorage.setItem('darkMode', 'light');
      this.setState({checkedSwitch: false});
      this.props.getCurrentTheme('light');
    }
  };

  render() {
    return (
      <footer>
        <div>
          <a href="https://github.com/devsakae/vaidartempo">
            <i className="bi bi-github"></i>
          </a>
          <a href="http://twitter.com/Sakae">
            <i className="bi bi-twitter"></i>
          </a>
          <a href="http://devsakae.me">
            <i className="bi bi-person-video"></i>
          </a>
          @devsakae
        </div>
        <div>
        <label className="switch">
          <input type="checkbox" onChange={ this.setLocalStorage } checked={ this.state.checkedSwitch } />
          <span className="slider"></span>
        </label>
        </div>
      </footer>
    )
  }
}
