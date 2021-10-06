import React from 'react'

export default function ListToDoItems(props) {
    return (
        <div className="container mt-3 text-left">
            {  props.TodoList.length === 0 ? <h4 className="text-info">Task Not avalable</h4>:
                <button className="btn btn-success btn-sm m-2" onClick ={()=>props.deleteCheckedItem()} >Delete Selected Items&nbsp;<i className="fas fa-trash" ></i></button>}

             <table className="table table-bordered">
                
                <tbody>
                
                {

                    props.TodoList.map((item,index)=>{
                    return (
                    
                        <tr key = {index}>
                      
                            <th scope="row">{index+1}</th>
                            <td><input className="form-check-input" type="checkbox"  id="flexCheckDefault" onClick={()=>props.checkTodo(index)}/></td>
                            <td><input className="form-control form-control-sm" value={item.name} onChange = {(e)=>props.UpdateTodo(e.target.value,index)}/></td>
                            <td><button className="btn btn-danger btn-sm" onClick ={()=>props.deleteItem(index)} ><i className="fas fa-trash" ></i></button></td>
                        </tr>)
                    })
                }
                    
                </tbody>
            </table>

        </div>
    )
}
