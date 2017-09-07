import React, { Component } from "react";
import PropTypes from 'prop-types';
import TaskActionCreators from "../actions/TaskActionCreators";
class CheckList extends Component {
	checkInputKeyPress(evt){
		if(evt.key === 'Enter'){
			let newTask = {id:Date.now(), name:evt.target.value,done:false};
			TaskActionCreators.addTask(this.props.cardId, newTask);
			evt.target.value = '';
		}
	}
	render() {

		/* tasks 是一个li数组。 */
		let tasks = this.props.tasks.map((task, taskIndex) => (
			<li className="checklist_task"
			    key={task.id+1}>
				<input type="checkbox"
				       id={task.name}
				       onChange={TaskActionCreators.toggleTask.bind(null, this.props.cardId, task, taskIndex)}
				       onKeyPress={this.checkInputKeyPress.bind(this)}
				/>
				{/*TODO:check label tag*/}
				<label htmlFor={task.name}>
					{task.name} {'  '}
				</label>
				{/*eslint-disable-next-line*/}
				<button href="#"
				   className="checklist_task--remove"
				   onClick={TaskActionCreators.deleteTask.bind(null, this.props.cardId, task, taskIndex)}
				/>
			</li>
		));

		return (
			<div className="checklist">
				<ul>{tasks}</ul>
				<input type="text"
				       className="checklist--add-task"
				       placeholder="Type then hit Enter! "
				       onKeyPress={this.checkInputKeyPress.bind(this)}
				/>
			</div>
		)
	}
}

CheckList.propTypes = {
	cardId: PropTypes.number,
	tasks: PropTypes.arrayOf(PropTypes.object)
};

export default CheckList;
