import React, { Component } from 'react';
import { connect }    		from 'react-redux';
import FilterOptions 		from './FilterOptions';
import ProductList 			from './ProductList';
import * as storiesActions  from '../../actions/';

let filterterm = [];

class ProductDisplay extends Component{
	state = {
		umbrellas: this.props.data.search_response.items.Item
	}

	filterme = [];

	handleFilter = (val) => {
		const { umbrellas } = this.state;
			let res=[];
		val = val.split(' ')[0];

		filterterm.push(val);

		filterterm.forEach(elem => {
			this.props.data.search_response.items.Item.forEach(el => {
				if(el.title.toLowerCase().includes(elem)) 
					res.push(el)
			})
		});

		console.log('filterterm -> ', filterterm)
		console.log('RES -> ', res)
		
		if(res.length === 0 ){
			const res = [{tcin:123, title:'no results'}]
			this.setState(() => ({umbrellas: res}));

			return null;
		}

		this.setState(() => ({umbrellas: res}))
	};

	render(){
		const { umbrellas } = this.state;

		return (
			<div>
				<FilterOptions handleFilter={this.handleFilter} />
				<ProductList umbrellas={umbrellas} />
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