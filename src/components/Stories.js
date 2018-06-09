import React from 'react';
import { connect }    from 'react-redux';
import * as storiesActions    from '../actions/';

//https://egghead.io/lessons/add-redux-observable-to-an-existing-redux-project

//<pre><code>{JSON.stringify(props, null, 2)}</code></pre>

const Stories = (props) => {
	//console.log('PROPS: ===> ', props)

	return (
		<div>
			<button onClick={props.loadStories}>Load Top 3 Stories</button>
			<button onClick={props.clear}>Clear</button>
			<StoryList {...props} />
		</div>	
	)
};//

const StoryList = (props) => {
	if(props.items.length === 0) return null;

	return (
		<div>
			{props.items.map(item => <Story {...item} key={item.id} />)}
		</div>
	) 
};//

const Story = (props) => (
	<p>{props.title}</p>
);//

const mapState = (state) => {
	return {
		items: state.items
	}
}

const mapDispatch = (dispath) => {
	return {
		loadStories: () => dispath(storiesActions.loadStories()),
		clear: () => dispath(storiesActions.clear())
	}
}

export default connect(mapState, mapDispatch)(Stories);