import React  from 'react';
import PropTypes from 'prop-types';

const Option = ({ filter, display_name }) => (
 	<span>
 		<input type="checkbox" id="contactChoice1" onClick={filter} name="priority" value={display_name} />
	    <label>{display_name}</label>
    </span> 
)

Option.propTypes = {
	filter: PropTypes.func.isRequired,
	display_name: PropTypes.string.isRequired
}

const FilterOptions = ({ handleFilter, type, terms }) => {
	const filter = (e) => { 
		handleFilter(e.target.value, e.target.checked) 
	};

	return (
		<div className="col-md-4">
			<h4>Filtered Results</h4>
			<div>{terms.map( term => <span className="filteredBy">{term} </span> )}</div>

			<hr />

			<div>Filter by Category</div>
			<form className="filterForm">
				{
					 type.details.map( elem => (
					 	<Option key={elem.facetId} filter={filter} {...elem} />
					 ))
				}
			</form>
		</div>
	)
};

export default FilterOptions;

FilterOptions.defaultProps = {
	terms: [],
	type: {}
}

FilterOptions.propTypes = {
	handleFilter: PropTypes.func.isRequired
}