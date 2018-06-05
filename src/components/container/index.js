import React from 'react';
import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';

import { fetchCurrencies } from '../../actions';
import Table from '../table';

const Container = () => (
	<div className='container'>
		<Table />
	</div>
);

const enhance = compose(
	connect(null, { fetchCurrencies }),
	lifecycle({
		componentDidMount() {
			this.props.fetchCurrencies();
		},
	}),
);

export default enhance(Container);
