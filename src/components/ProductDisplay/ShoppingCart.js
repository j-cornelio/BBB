import React from 'react';
import ShoppingDisplay from '../material/ShoppingDisplayDialog'


/*
title, url, images, list_price, upc,
*/
const add = (arr) => {
	let nums = [], res = 0;

	if(arr.length === 0) return [ 0 ];
	if(arr.length === 1) return arr[0];

	nums = arr.map( num => parseFloat(num) * 100 )

	res =  nums.reduce((accu, el, idx) => {
		return accu + el
	});

	return (res/100).toFixed(2)
}

const ShoppingCart = ({ cart }) => {
	const data = sessionStorage.cart ? JSON.parse( sessionStorage.cart ) : [];

	let prices = data.map( el => el.list_price.price )
	
	let total = add(prices);

	return (
		<div>
			<h5>Your Cart has ({cart.length} items) <i className={["fas", "fa-user"].join(' ')}></i></h5>
			 
			{data.length ? <p>NOW YOU TALKEN</p> : <p>EMPTY</p>}

			<ShoppingDisplay>
				<h4>Cart Total: ${total}</h4>
				<hr />
				{data.map(elem => (
					<div key={elem.upc}>
						<img src={elem.images[0].base_url + elem.images[0].primary} alt="product" style={{"width": "20%"}}  />
						<p>{elem.title}</p>
						<p>{elem.list_price.formatted_price}</p>
					</div>
				))}
			</ShoppingDisplay>
		</div>
	)
}

export default ShoppingCart;

ShoppingCart.defaultProps = {
  cart: []
};