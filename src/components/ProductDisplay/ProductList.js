import React  from 'react';
import PropTypes from 'prop-types';

const Product = ({ title }) => <li>{title}</li>;//

const ProductList = ({ umbrellas }) => {
	return (
		<div className="col-md-8">
			<ul>
				{ umbrellas.map(item => 
					<Product key={item.tcin} {...item} />) }
			</ul>
		</div>
	)
};//

export default ProductList;

ProductList.propTypes = {
	umbrellas: PropTypes.arrayOf( PropTypes.object ).isRequired
}

Product.propTypes = {
	title: PropTypes.string.isRequired
}