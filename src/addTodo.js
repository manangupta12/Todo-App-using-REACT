import React, { Component } from 'react';

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
            // alert.show('Oh look, an alert!')
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