import React  from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

const Product = ({ title, url, images }) => {
console.log(images);

	images = images || [{base_url:''}];

	return (
		<li>
			<img src={images[0].base_url + images[0].primary} />
			<p>{title}</p> 
			<Button variant="contained" color="primary">Add to Card</Button>
		</li>
	)
}

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