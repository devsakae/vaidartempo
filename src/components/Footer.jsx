import React, { Component } from 'react';

export default class Footer extends Component {
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
      </footer>
    )
  }
}
