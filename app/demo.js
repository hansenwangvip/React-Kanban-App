import React, { Component } from 'react';
import {render} from 'react-dom';

class App extends Component {
  render(){
    var place = "Jason"
    return (
      <h1>Hello {place}</h1>
    );
  }
}

class Hello extends Component{
  render(){
    var person = "Jason";
    return (
      <h1> Hello {person}</h1>
    );
  }
}

class GroceryList extends Component{
  render(){
      return(
        <ul>
          <ListItem quantity = "1" >B</ListItem>
          <ListItem quantity = "6" >Eggs</ListItem>
          <ListItem quantity = "2" >Milk</ListItem>
        </ul>
    );
  }
}
class ListItem extends Component{
  render(){
    return(
      <li>
          {this.props.quantity} = {this.props.children}
      </li>
    );
  }
}

render(<Hello />, document.getElementById('root'));
render(<GroceryList />, document.getElementById('list'))
