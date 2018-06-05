import React from 'react';
import { Table, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import moment from 'moment';

import HEADERS from '../../constants/header';
import PairSelect from '../select';


const Wrapper = styled.div`
	margin-top: 20px;
    max-width: 100%;
    border-radius: 10px;
    box-sizing: border-box;
    padding: 15px 30px 20px;
    background: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .2);
`;
const Title = styled.h3`
	margin-top: 3px;
`;

const Type = styled.span`
    background: ${props => (props.buy ? '#fd5353' : '#6EFD43')};
    border-radius: 5px;
    padding: 6px 10px;
    color: #fff;
`;

const StyledTable = styled(Table)`
	margin-top: 20px;
`;

const Cell = styled.td`
	padding: 16px !important;
`;

const Header = styled.th`
	padding: 16px !important;
`;

const NoData = styled.div`
	text-align:center;
	font-size: 18px;
`;

const DataTable = ({ trades }) => (
	<Wrapper>
		<Row>
			<Col md={9}>
				<Title>History trades</Title>
			</Col>
			<Col md={3}>
				<PairSelect />
			</Col>
		</Row>
		<StyledTable responsive>
			<thead>
				<tr>
					{
						HEADERS.map((value, index) => (
							<Header key={index}>
								{value}
							</Header>
						))
					}
				</tr>
			</thead>
			<thead>
				{
					trades.map((item, index) => (
						<tr key={index}>
							<Cell>{moment(item.date).format('DD.MM.YYYY HH:mm')}</Cell>
							<Cell>
								<Type buy={item.type === 'buy'}>
									{item.type}
								</Type>
							</Cell>
							<Cell>{item.amount}</Cell>
							<Cell>{item.total}</Cell>
							<Cell>{item.rate}</Cell>
						</tr>
					))
				}
			</thead>
		</StyledTable>
		{
			!trades.length && <NoData>No data.</NoData>
		}
	</Wrapper>
);

DataTable.propTypes = {
	trades: PropTypes.array.isRequired,
};

export default connect(state => ({ trades: state.trades }))(DataTable);
