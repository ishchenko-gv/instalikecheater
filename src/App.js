import React, { Component } from "react";
import { Provider } from "react-redux";

import store from "./store";
import Layout from "./layout/components/Layout";

import 'semantic-ui-css/semantic.min.css';
import './styles/index.scss';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Layout />
      </Provider>
    );
  }
}

export default App;
