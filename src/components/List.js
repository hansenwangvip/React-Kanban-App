import React, { Component } from "react";
import PropTypes from 'prop-types';

import {DropTarget} from 'react-dnd';
import Card from './Card';
import constants from '../consts/consts'
import CardActionCreators from "../actions/CardActionCreators";

const listTargetSpec = {
	hover(props, monitor) {
		const dragged = monitor.getItem().id;
		CardActionCreators.updateCardStatus(dragged.id, props.id);
	}
};

function collect(connect) {
	return {
		connectDropTarget: connect.dropTarget()
	};
}

class List extends Component {
	render() {
		const {connectDropTarget} = this.props;

		let cards = this.props.cards.map((card) => {
			return <Card key={card.id}
			             {...card}
			/>
		});
		return connectDropTarget(
			<div className="list">
				<h1> {this.props.title} </h1>
				{cards}
			</div>
		);
	}
}

List.propTypes = {
	id:PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	cards: PropTypes.arrayOf(PropTypes.object),
	connectDropTarget:PropTypes.func.isRequired
};

export default DropTarget(constants.CARD, listTargetSpec, collect)(List);
