import React from 'react';
import {render, unmountComponentAtNode} from 'react-dom'
import {Provider} from "react-redux";
import store from "./store";
import "./styles/application.scss"
import App from './App';

export class Application extends React.Component {
  render() {
    return (
      <Provider store={store}>
          <App />
      </Provider>)
  }
}

class MainApp extends HTMLElement {
  connectedCallback() {
    if (!this.mountPoint) {
      this.mountPoint = document.createElement('div');
      this.appendChild(this.mountPoint);
    }

    render(<Application />, this.mountPoint);
  }

  disconnectedCallback() {
    unmountComponentAtNode(this.mountPoint);
  }
}

window.customElements.define('main-app', MainApp);
