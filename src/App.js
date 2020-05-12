import React, { Component } from 'react';
import AddTodo from "./addTodo"
import Todos from "./listTodo"
import swal from 'sweetalert';

class App extends Component {
  state = {
    todo : [
        {
          content : "Learn React Native !",
          key : 1
        },
        {
          content : "Learn Django !",
          key : 2
        }
      ]
  }
  addTodo = (todo) => {
    var todoCopy = [...this.state.todo,todo]
    
    this.setState({
      todo : todoCopy
    })
  }
  deleteTodo = (key) => {
    swal({
      title: "Are you sure?",
      text: "You're trying to delete a task !",
      icon: "warning",
      buttons: ["Cancel", "Delete"],
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        let todo = this.state.todo.filter((t) => t.key !== key);
    
        this.setState({
          todo
        })
        swal("Poof! Your task has been deleted!", {
          icon: "success",
        });
      } else {
        swal("Your task is safe !");
      }
    });
  }
  render(){
    return (
      <div className="App">
        <div className = "container">
          <Todos todos = {this.state.todo} deleteTodo = {this.deleteTodo} />
          <AddTodo addTodo = {this.addTodo} />
        </div>
      </div>
    );
  }
}

export default App;
