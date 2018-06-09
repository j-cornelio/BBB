import { Observable } from 'rxjs';
import { combineEpics } from 'redux-observable';
import { fetchUserFulfilled, clear } from '../actions/index';
/*
	don't need to import fetchUserActions()
	passing payload from fetchUserActions() to fetchUserFulfilled()
	switchMap - drop one over another
	of - turns to an observable
*/
const fetchUserEpic = (action$, store) => (
	action$.ofType('FETCH_USER')
		.switchMap(( { payload } ) => { 
			const users = store.getState().users;

	  		if(users[users.length - 1] === 'clear'){
				return Observable.of( clear() ).delay(2222)
	  		}else{
	  			return Observable.of( fetchUserFulfilled(payload) ).delay(2222)
	  		}
		})
)

const rootEpic = combineEpics(fetchUserEpic);

export default rootEpic;