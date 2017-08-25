import React, { Component } from "react";
import PropTypes from 'prop-types';
class CheckList extends Component {
	checkInputKeyPress(evt){
		if(evt.key === 'Enter'){
			this.props.taskCallbacks.add(this.props.cardId, evt.target.value);
			evt.target.value = '';
		}
	}
	render() {

		/* tasks 是一个li数组。 */
		let tasks = this.props.tasks.map((task, taskIndex) => (
			<li className="checklist_task"
			    key={task.id}
			>
				<input type="checkbox"
				       id={task.name}
				       onChange={this.props.taskCallbacks.toggle.bind(null, this.props.cardId, task.id, taskIndex)}
				       onKeyPress={this.checkInputKeyPress.bind(this)}
				/>
				<label htmlFor={task.name}>
					{task.name} {'  '}
				</label>
				{/*eslint-disable-next-line*/}
				<button href="#"
				   className="checklist_task--remove"
				   onClick={this.props.taskCallbacks.delete.bind(null, this.props.cardId, task.id, taskIndex)}
				/>

			</li>
		));

		return (
			<div className="checklist">
				<ul>{tasks}</ul>
				<input type="text"
				       className="checklist--add-task"
				       onKeyPress={this.checkInputKeyPress.bind(this)}
				       placeholder="Type then hit Enter! " />
			</div>
		)
	}
}

CheckList.propTypes = {
	cardId: PropTypes.number,
	taskCallbacks:PropTypes.object,
	tasks: PropTypes.array
};

export default CheckList;
