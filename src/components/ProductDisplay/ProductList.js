import React  from 'react';
import PropTypes from 'prop-types';

const Product = ({ title }) => <li>{title}</li>;//

const ProductList = ({ umbrellas }) => {
	return (
		<ul>
			{ umbrellas.map(item => 
				<Product key={item.tcin} {...item} />) }
		</ul>
	)
};//

export default ProductList;

ProductList.propTypes = {
	handleFilter: PropTypes.func.isRequired
}