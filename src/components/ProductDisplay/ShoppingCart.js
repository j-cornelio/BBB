import React from 'react';

const ShoppingCart = ({ cart }) => (
	<h5>Your Cart has ({cart.length} items)</h5>
)

export default ShoppingCart;

ShoppingCart.defaultProps = {
  cart: []
};