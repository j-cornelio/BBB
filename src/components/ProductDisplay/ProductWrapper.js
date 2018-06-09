import React, { Component } from 'react';
import { connect }    		from 'react-redux';
import FilterOptions 		from './FilterOptions';
import * as storiesActions  from '../../actions/';



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

	filterme = [];

	handleFilter = (val) => {
		const { umbrellas } = this.state;
		val = val.split(' ')[0];

		this.filterme.push(val);

		const res = this.props.data.search_response.items.Item
						.filter( el => el.title.toLowerCase().indexOf(val) >= 0 )

		console.log(res.length)

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