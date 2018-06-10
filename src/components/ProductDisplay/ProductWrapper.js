import React, { Component } from 'react';
import { connect }    		from 'react-redux';
import FilterOptions 		from './FilterOptions';
import ProductList 			from './ProductList';
import * as storiesActions  from '../../actions/';

class ProductDisplay extends Component{
	constructor(props){
		super(props);
		this.handleFilter = this.handleFilter.bind(this);		
	}

	state = {
		umbrellas: this.props.data.search_response.items.Item,
		filterterms: []
	}

	filterterms = [];

	handleFilter(val, checked) {
		let { umbrellas } = this.state,
			res=[],
			idx = 0;
		
		val = val.split(' ')[0];

		idx = this.filterterms.indexOf(val);
		
		if (checked) {
			this.filterterms.push(val);
		} else {
			this.filterterms.splice(idx, 1);
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
				filterterms: this.filterterms
			})
		)
	};

	render(){
		const { umbrellas, filterterms } = this.state; 
		const [ type, color ]  = this.props.data.search_response.facet_list;

console.log('filterterms: ', filterterms);

		return (
			<div className="container">
				<div className="row">
					<FilterOptions handleFilter={this.handleFilter} type={type} terms={filterterms} />
					<ProductList umbrellas={umbrellas}  />
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