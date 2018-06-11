import React, { Component } from 'react';
import ProductDisplay              from '../components/ProductDisplay/ProductWrapper';

const Header = () => <h1 className="product-header">Umbrellas</h1>;

class Grid extends Component {
  render() {
    return (
      <div className="main-container">
      	<Header />
        <ProductDisplay />
      </div>
    );
  }
}

export default Grid;