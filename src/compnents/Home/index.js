import React from 'react'
import HigerOrderComponent from './HOCComponent'
import ListToDoItems from './ListToDoItems';
import AddToDoItem from './AddToDoItem';
import "../../App.css";

function index(props) {

    return (
      <div className="container-fluid bg-dark outter">
      <h1>Welcome The Dashboad!</h1>
      <h3 className="text-light heading" >ToDo List</h3>
      <div className='text-center mt-2 bg-light inner text-left'>
        
        <div className = "p-4">
            <AddToDoItem  todo = {props.todoValue} setItemInput = {props.setTodoInput} addItem = {props.addTodo}/>
            <ListToDoItems deleteItem = {props.deleteToDoListItem} TodoList = {props.todoItems} checkTodo = {props.checkTodo} deleteCheckedItem = {props.deleteCheckedItem} UpdateTodo = {props.UpdateTodo}/>
        </div>
            
      </div>
      </div>
    )
}

export default HigerOrderComponent(index)