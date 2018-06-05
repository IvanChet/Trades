import { createAction } from 'redux-actions';

export const fetchCurrenciesRequest = createAction('FETCH_CURRENCIES_REQUEST');
export const fetchCurrenciesSuccess = createAction('FETCH_CURRENCIES_SUCCESS');
export const fetchCurrenciesFailure = createAction('FETCH_CURRENCIES_FAILURE');
export const setPair = createAction('SET_PAIR');

export const fetchCurrencies = () => dispatch => {
	dispatch(fetchCurrenciesRequest());
	return fetch('https://poloniex.com/public?command=returnTicker')
		.then(response => response.json()
			.then(data => dispatch(fetchCurrenciesSuccess(data))))
		.catch(err => dispatch(fetchCurrenciesFailure(err)));
};

export const fetchTradesRequest = createAction('FETCH_TRADES_REQUEST');
export const fetchTradesSuccess = createAction('FETCH_TRADES_SUCCESS');
export const fetchTradesFailure = createAction('FETCH_TRADES_FAILURE');

export const fetchTrades = pair => dispatch => {
	dispatch(fetchTradesRequest());
	return fetch(`https://poloniex.com/public?command=returnTradeHistory&currencyPair=${pair}`)
		.then(response => response.json()
			.then(data => dispatch(fetchTradesSuccess(data))))
		.catch(err => dispatch(fetchTradesFailure(err)));
};
