import React  		from 'react';
import Product 		from './Product';
import PropTypes 	from 'prop-types';

const ProductList = ({ umbrellas, handleShopping }) => {
	return (
		<div className="col-md-8">
			<ul className="productlist">
				{ umbrellas.map(item => 
					<Product key={item.tcin} {...item} handleShopping={handleShopping} />) }
			</ul>
		</div>
	)
};

export default ProductList;

ProductList.propTypes = {
	umbrellas: PropTypes.arrayOf( PropTypes.object ).isRequired
}

Product.propTypes = {
	title: PropTypes.string.isRequired
}