import React from 'react'

export default function AddToDoItem(props) {
    return (
        <div className="container">
               

            <div className="row">
                <div className="col-lg-10 col-md-10 col-sm-12">
                <input className="form-control form-control-sm" type="text" placeholder = "New Task" 
                    value={props.todo} 
                    onChange = {(e)=>props.setItemInput(e.target.value)}
                />               
                
                </div>
                <div className="col-lg-2 col-md-2 col-sm-2">
                    <button className="btn btn-primary btn-sm" onClick = {()=>props.addItem()}>ADD </button>
                </div>

            </div>
            
            
        </div>
    )
}
