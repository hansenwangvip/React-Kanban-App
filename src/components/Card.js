import React, { Component } from "react";
import PropTypes from 'prop-types';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import marked from 'marked';
import {DragSource, DropTarget} from 'react-dnd';
import constants from '../consts/consts';
import CheckList from './CheckList';

import {Link} from 'react-router';


//自定义propTypes校验器
// eslint-disable-next-line
let titlePropTypes = (props, propName, componentName) => {
	if (props[propName]) {
		let value = props[propName];
		if (typeof value !== 'string' || value.length > 80) {
			return new Error(
				//模板字符串$()
				`${propName} in ${componentName} is longer than 80 characters!`
			)
		}
	}
}

//cardDragSpec
const cardDragSpec = {
	beginDrag(props) {
		return {
			id: props.id
		};
	}
};
//cardDropSpec
const cardDropSpec = {
	hover(props, monitor) {
		const draggedId = monitor.getItem().id;
		props.cardCallbacks.updatePosition(draggedId, props.id);
	}
};

let collectDrag = (connect, monitor) => {
	return {
		connectDragSource: connect.dragSource()
	};
}

let collectDrop = (connect, monitor) => {
	return {
		connectDropTarget: connect.dropTarget()
	};
}

class Card extends Component {
	constructor() {
		super(...arguments);
		this.state = {
			showDetails: false
		};
	}

	toggleDetails() {
		this.setState({showDetails: !this.state.showDetails});
	}

	render() {
		//拖拽实现
		const {connectDragSource, connectDropTarget} = this.props;

		let cardDetails;
		if (this.state.showDetails) {
			cardDetails = (
				<div className="card_details">

					<span dangerouslySetInnerHTML={{__html: marked(this.props.description)}}></span>


					<CheckList cardId={this.props.id}
					           tasks={this.props.tasks}
					           taskCallbacks={this.props.taskCallbacks}
					/>
				</div>
			)
		}

		//内联样式
		let sideColor = {
			position: 'absolute',
			zIndex: -1,
			top: 0,
			bottom: 0,
			left: 0,
			width: 7,
			backgroundColor: this.props.color
		};

		return connectDropTarget(
			connectDragSource(
				<div className="card"
				>
					<div style={sideColor}></div>
					<div className="card_edit">
						<Link to={'/edit/' + this.props.id}>&#9998;</Link>
					</div>
					<div className={this.state.showDetails ? "card_title card_title--is--open" : "card_title"}
					     onClick={
						     this.toggleDetails.bind(this)
					     }>
						{this.props.title}
					</div>
					<ReactCSSTransitionGroup transitionName="toggle"
					                         transitionEnterTimeout={250}
					                         transitionLeaveTimeout={250}>

						{cardDetails}
					</ReactCSSTransitionGroup>
				</div>
			)
		);
	}
}

Card.propTypes = {
	id: PropTypes.number,
	title: PropTypes.string,
	description: PropTypes.string,
	tasks: PropTypes.arrayOf(PropTypes.object),
};

const dragHighOrderCard = DragSource(constants.CARD, cardDragSpec, collectDrag)(Card);
const dragDropHighOrderCard = DropTarget(constants.CARD, cardDropSpec, collectDrop)(dragHighOrderCard);

export default dragDropHighOrderCard;