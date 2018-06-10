import React 					from 'react';
import ReactDOM 				from 'react-dom';
import './index.css';
import App 						from './containers/App';
import { 
	createStore, 
	applyMiddleware, 
	compose 
}        						from 'redux';
import { Provider }         	from 'react-redux';
import reducer         			from './reducers/usersReducer';
import registerServiceWorker 	from './registerServiceWorker';

import { createEpicMiddleware } from 'redux-observable';
import rootEpic 				from './epics/index';

const epicMiddleware = createEpicMiddleware(rootEpic);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
	reducer, 
	composeEnhancers(
		applyMiddleware(epicMiddleware)
	),
);

//console.log('STORE: ===> ', store.getState())

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>, 
	document.getElementById('root')
);

registerServiceWorker();
