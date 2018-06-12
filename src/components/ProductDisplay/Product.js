import React from 'react';
import AlertDialog from '../material/AlertDialog';
import PropTypes from 'prop-types';

const Product = ({ title, url, images, list_price, upc, handleShopping }) => {
	images = images || [{base_url:''}];

	return (
		<li>
			<img src={images[0].base_url + images[0].primary} alt="product" />

			<p>{title}</p> 
			
			<AlertDialog upc={upc} title={title} url={url} images={images} list_price={list_price} handleShopping={handleShopping}>
				<h1>added to cart</h1>
				<img src={images[0].base_url + images[0].primary} style={{'width': '20%'}} alt="product in dialog" />
				<h4>{title}</h4>
				<h4>{list_price.price}</h4>
			</AlertDialog>
		</li>
	)
}

export default Product;

Product.defaultProps = {
  title: '',
  url: '',
  list_price: '',
  upc: '',
};

Product.propTypes = {
  images: PropTypes.string.isRequired,
};