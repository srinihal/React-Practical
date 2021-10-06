import React,{useState} from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const HigerOrderComponent = (Component) => { 
    function HOCComponent(props) { 
        const [todoInput, setTodoInput] = useState("")
        const [list, setList] = useState([ ])
        const [checkTodoItem, setCheckTodoItem] = useState([ ])

        const hendelAddTodo = ()=>{
            if(!todoInput || todoInput === "")
                return toast.error("Please Enter Task Name");
            const addTodo = {
                id:new Date().getTime().toString(),
                name:todoInput
            }
           setList([...list,addTodo])
           setTodoInput("")
           return toast.success("Task Added Successfully !");
        }

        const deleteTodoItem = (index)=>{
            const listItems = [...list];
            listItems.splice(index,1)
           setList([...listItems])
           toast.success('Task Deleted Successfully !'); 
        }
        const handleCheckItem = (index) =>{
            console.log(index)
            if(checkTodoItem.indexOf(index) !== -1){
                const option = [...checkTodoItem ]
                option.splice(index,1)
                setCheckTodoItem([...option])
            } else{
                setCheckTodoItem([...checkTodoItem,index])
            }

        }

        const handleDeleteCheckedItem = () =>{
            console.log(checkTodoItem)
            if(checkTodoItem.length === 0)
                return toast.error("Please Select Task First");
            const newList = list.filter( ( el,index ) =>
                !checkTodoItem.includes( index ) 
            ); 
            const reset = []
            setCheckTodoItem([...reset])
            setList([...newList])
            
            toast.success('Selected Tasks Deleted Successfully !'); 
        }

        const handleUpdateTodo = (value,i) =>{
            let listArray = [...list ]
            listArray[i] = value;
            setList([...listArray])
        }

        return (
            <div>
                <Component  addTodo = {hendelAddTodo} deleteToDoListItem = {deleteTodoItem} setTodoInput = {setTodoInput} todoValue={todoInput} todoItems = {list} checkTodo={handleCheckItem} deleteCheckedItem ={handleDeleteCheckedItem} UpdateTodo = {handleUpdateTodo}/>
                <ToastContainer />
            </div>
        )
    }
    return HOCComponent ;
}

export default HigerOrderComponent;