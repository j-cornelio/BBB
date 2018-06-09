import React, { Component } from 'react';
import { connect }    from 'react-redux';
import * as storiesActions    from '../actions/';

const filterTerms= ['compact umbrellas', 'stick umbrellas', 'bubble umbrellas', 'golf umbrellas'];

const FilterOptions = () => {
	const filter = (e) => { console.log(e.target) };

	return (
		<div>	
			<div>Filter by Category</div>				 	
			<form>
				{
					 filterTerms.map( elem => (
					 	<span key={elem}>
					 		<input type="radio" id="contactChoice1" onClick={filter} name="priority" value={elem} />
						    <label>{elem}</label>
					    </span> 
					 ))
				}
			</form>
		</div>
	)
};//


const Product = ({ title }) => {
	return (
		<li>
			{title}
		</li>	
	)
};//


const ProductList = ({ umbrellas}) => {
	return (
		<ul>
			{umbrellas.map(item => <Product key={item.tcin} {...item} />)}
		</ul>
	)
};//

class ProductDisplay extends Component{
	state = {
		umbrellas: this.props.data.search_response.items.Item
	}

	render(){
		const { umbrellas } = this.state;
console.log('STATE: ', umbrellas)
		return (
			<div>
				<FilterOptions />
				<ProductList umbrellas={umbrellas} />
			</div>
		)
	}
};

const mapState = (state) => {
	return {
		data: state.data,
		loading: state.loading,
	}
}

const mapDispatch = (dispath) => {
	return {
		loadUser: (login) => dispath(storiesActions.fetchUserActions(login)),
	}
}

export default connect(mapState, mapDispatch)(ProductDisplay);