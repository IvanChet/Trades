import React from 'react';
import Select from 'react-select';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { setPair, fetchTrades } from '../../actions';


const PairSelect = ({
	pairs, setPair, pair, fetchTrades,
}) => (
	<Select
		valueKey='value'
		labelKey='label'
		options={Object.keys(pairs).map(item => ({ value: item, label: item.replace('_', ' - ') }))}
		onChange={option => {
			setPair(option.value);
			fetchTrades(option.value);
		}}
		value={pair}
		searchable={false}
		clearable={false}
		placeholder='Choose pair'
	/>
);

PairSelect.propTypes = {
	pairs: PropTypes.object.isRequired,
	setPair: PropTypes.func.isRequired,
	pair: PropTypes.string,
	fetchTrades: PropTypes.func.isRequired,
};
PairSelect.defaultProps = {
	pair: null,
};
export default connect(
	state => ({ pairs: state.pairs, pair: state.pair }),
	{ setPair, fetchTrades },
)(PairSelect);
