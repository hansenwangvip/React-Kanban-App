import React, {Component} from 'react';

class CheckList extends Component {
	render() {
		let tasks = this.props.tasks.map((task) => (
			<li className="checklist_task">
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
			</div>
		);
	}
}
export default CheckList;
