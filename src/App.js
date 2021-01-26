import React, {Component} from 'react'
import Todos from './components/Todos'

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Pizza this Friday night',
        completed: false
      },
      {
        id: 2,
        title: 'Do some React tutorials',
        completed: false
      },
      {
        id: 3,
        title: 'Get some laps of the Nordschliefe with Dave',
        completed: false
      },
      {
        id: 4,
        title: 'Have a massive lie in on Saturday',
        completed: false
      }
    ]
  }

  markComplete = (id) => {
    console.log(id);
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;
    }) });
}

  render(){
    console.log(this.state.todos)
    return (
      <div className="App">
        <Todos todos = {this.state.todos} markComplete={this.markComplete}/>
      </div>
    );
  }
}

export default App;
