import React from 'react';
import { connect }    from 'react-redux';
import * as storiesActions    from '../actions/';

//https://egghead.io/lessons/add-redux-observable-to-an-existing-redux-project

//<pre><code>{JSON.stringify(props, null, 2)}</code></pre>

/*
	because API call could take some time, we should set the loading state to true when button is clicked
*/
const Users = (props) => {
	console.log('PROPS: ===> ', props)
	return (
		<div>
			<ul>
				{props.users.map(login =>
					<li key={login}>
						{login}
						<button onClick={() => props.loadUser(login)}>Load user</button>
					</li>
				)}
			</ul>
			{props.loading && <p>Please wait!</p>}
			{props.current && <p>xxx</p>}
		</div>	
	)
};//

const mapState = (state) => {
	return {
		users: state.users,
		loading: state.loading,
	}
}

const mapDispatch = (dispath) => {
	return {
		loadUser: (login) => dispath(storiesActions.fetchUserActions(login)),
	}
}

export default connect(mapState, mapDispatch)(Users);