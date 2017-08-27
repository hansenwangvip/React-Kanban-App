import React,{Component} from 'react';
import { Router, Route} from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';

import KanbanBoardContainer from './components/KanbanBoardContainer';
import KanbanBoard from './components/KanbanBoard';

import NewCard from './routes/NewCard';
import EditCard from './routes/EditCard';

class App extends Component{
	render(){
		return(
			<Router history={createBrowserHistory()}>
				<Route component={KanbanBoardContainer}>
					<Route path="/"
					       component={KanbanBoard}>
						<Route path="new"
						       component={NewCard} />
						<Route path="edit/:card_id"
						       component={EditCard} />
					</Route>
				</Route>
			</Router>
		)
	}
}

export default  App;
