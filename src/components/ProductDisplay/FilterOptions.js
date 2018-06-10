import React  from 'react';
import PropTypes from 'prop-types';

const Option = ({ filter, display_name }) => (
 	<span>
 		<input type="checkbox" id="contactChoice1" onClick={filter} name="priority" value={display_name} />
	    <label>{display_name}</label>
    </span> 
)

const FilterOptions = ({ handleFilter, type, terms }) => {
	const filter = (e) => { 
		handleFilter(e.target.value, e.target.checked) 
	};
console.log('terms => ', terms);
	return (
		<div className={['col-md-4', 'types'].join(' ')}>
			<h4>Filtered Results</h4>
			<div>{terms.map( term => <span className="filteredBy">{term} </span> )}</div>

			<hr />

			<div>Filter by Category</div>
			<form>
				{
					 type.details.map( elem => (
					 	<Option key={elem.facetId} filter={filter} {...elem} />
					 ))
				}
			</form>
		</div>
	)
};//

export default FilterOptions;

FilterOptions.propTypes = {
	handleFilter: PropTypes.func.isRequired
}