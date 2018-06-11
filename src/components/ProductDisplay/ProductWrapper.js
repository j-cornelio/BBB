import React, { Component } from 'react';
import { connect }    		from 'react-redux';
import FilterOptions 		from './FilterOptions';
import ProductList 			from './ProductList';
import ShoppingCart 			from './ShoppingCart';
import * as storiesActions  from '../../actions/';

class ProductDisplay extends Component{
	constructor(props){
		super(props);
		this.handleFilter 	= this.handleFilter.bind(this);		
		this.handleFilter 	= this.handleFilter.bind(this);		
		this.handleShopping = this.handleShopping.bind(this);		
	}

	state = {
		umbrellas: this.props.data.search_response.items.Item,
		filterterms: [],
		cart: sessionStorage.cart ? JSON.parse(sessionStorage.cart) : []
	}

	filterterms = [];
	
	filteredBy = [];
	
	handleFilter(val, checked) {
		let { umbrellas } = this.state,
			res=[],
			idx = 0,
			idx2 = 0,
			split = [];

		split = val.split(' ')[0];

		idx = this.filterterms.indexOf(split);
		idx2 = this.filteredBy.indexOf(val);
		
		if (checked) {
			this.filterterms.push(split);
			this.filteredBy.push(val);
		} else {
			this.filterterms.splice(idx, 1);
			this.filteredBy.splice(idx2, 1)
		}

		//add in objects according to terms to filter
		this.filterterms.forEach(elem => {
			this.props.data.search_response.items.Item.forEach(el => {
				if(el.title.toLowerCase().includes(elem)) 
					res.push(el)
			})
		});
		
		if(res.length === 0 ){
			const res = [{tcin:123, title:'no results'}]
			this.setState(() => ({umbrellas: res}));

			return null;
		}

		this.setState(() => ({
				umbrellas: res,
				filterterms: this.filteredBy
			})
		)
	};

	handleShopping(data){
		this.setState( () => ({cart: data}) )
	}

	render(){
		const { umbrellas, filterterms, cart } = this.state; 
		const [ type, color ]  = this.props.data.search_response.facet_list;
console.log('CART ', this.state)
		return (
			<div className="container">
				<ShoppingCart cart={cart} />
				<div className="row">
					<FilterOptions handleFilter={this.handleFilter} type={type} terms={filterterms} />
					<ProductList umbrellas={umbrellas} handleShopping={this.handleShopping}  />
				</div>
			</div>
		)
	}
};//

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

ProductDisplay.deafaultProps = {
	data: {}	
}