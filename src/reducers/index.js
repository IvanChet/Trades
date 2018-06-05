import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { fetchCurrenciesSuccess, fetchTradesSuccess, setPair } from '../actions';


const pairs = handleActions({
	[fetchCurrenciesSuccess]: (state, action) => action.payload,
}, {});

const pair = handleActions({
	[setPair]: (state, action) => action.payload,
}, null);

const trades = handleActions({
	[fetchTradesSuccess]: (state, action) => action.payload,
}, []);

export default combineReducers({
	pairs,
	pair,
	trades,
});
