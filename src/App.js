import React, { Component } from 'react';
import './App.css';
import ProductDisplay              from './components/ProductDisplay/ProductWrapper';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ProductDisplay />
      </div>
    );
  }
}

export default App;
