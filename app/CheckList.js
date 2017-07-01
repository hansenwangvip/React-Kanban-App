import React, {Component, PropTypes} from 'react';

class CheckList extends Component {
	render() {
		{/* tasks 是一个li数组。 */
		}
		let tasks = this.props.tasks.map((task) => (
			<li className="checklist_task"
			    key={task.id}>
				<input type="checkbox"
				       id={task.name}
				       defaultChecked={task.done} />
				<label htmlFor={task.name}>
					{task.name}
				</label>
				<a href="#"
				   className="checklist_task--remove" />
			</li>
		));

		return (
			<div className="checklist">
				<ul>{tasks}</ul>
				<input type="text"
				       className="checklist--add-task"
				       placeholder="Type then hit Enter to add a task! " />
			</div>
		);
	}
}

CheckList.propTypes = {
	cardId: PropTypes.number,
	tasks: PropTypes.arrayOf(PropTypes.object)
}

export default CheckList;
