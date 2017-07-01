import React from 'react';
import {render} from 'react-dom';
import KanbanBoard from './KanbanBoard';

let cardsList = [
	{
		id: 1,
		title: "Read the Book",
		description: " I should read the whole book",
		color: '#bd8d31',
		status: 'in-progress',
		tasks: []
	},
	{
		id: 2,
		title: 'Write some code',
		color: '#3a7e28',
		description: "Code allong with the samples in the book",
		status: 'todo',
		tasks: [
			{
				id: 1,
				name: "ContactList Example",
				done: true
			},
			{
				id: 2,
				name: "Kanban Example",
				done: false
			},
			{
				id: 3,
				name: "My own experiments",
				done: false
			}
		]
	},
];

render(<KanbanBoard cards={cardsList} />, document.getElementById("root"));