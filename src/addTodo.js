import React, { Component } from 'react';
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
toast.configure()
class Todo extends Component{
    
    state = {
        content : ''
    }
    takeInput = (e) => {
        this.setState({
            content : e.target.value,
            key : Math.random()
        })
    };
    submitButton = (e) => {
        e.preventDefault()
        if(this.state.content !== ''){
            this.props.addTodo(this.state);
            this.setState({
                content : ""
            })
        }
        else{
            toast.info('You need to add a task first !',{position: toast.POSITION.TOP_RIGHT,autoClose:3000})
        }
    }
    render(){
        return(
            <form>
                <input placeholder = "Add Todos here !!" onChange = {this.takeInput} value = {this.state.content} />
                <button className="btn-floating btn-large waves-effect waves-light red" onClick = {this.submitButton}><img alt = "" src="https://img.icons8.com/bubbles/50/000000/add.png"/></button>
            </form>
        )
    }
}

export default Todo