import React from 'react';

const ListTodo = ({todos,deleteTodo}) => {
    var todolist = todos.map(todo=>{
        return(
            <div className = "todolist" key = {todo.key}>
            <div className="row">
                <div className="col s12 m6">
                <div className="card red darken-1">
                    <div className="card-content white-text">
                    <span className="card-title"></span>
                    <p>{todo.content}<button onClick = {() => deleteTodo(todo.key)} 
                    className="btn-floating btn-large waves-effect waves-light grey">
                    <i className="material-icons right">delete</i>Delete</button></p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        )
    })
    return(
        <div className="todos">
            {todolist}
        </div>
    )
}

export default ListTodo