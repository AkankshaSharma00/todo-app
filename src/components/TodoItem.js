import React from "react";
import "../App.css";

function TodoItem(props){
    const completedStyle = {
        fontStyle: "italic",
        color: "#cdcdcd",
        textDecoration: "line-through"
    }

    return(
        <div className="todo-item">    
            <input 
                type="checkbox" 
                className="checkbox_input"
                checked={props.data.completed} 
                onChange={() => props.handleChange(props.data.id)}/>
            <p style={props.data.completed ? completedStyle : null}>{props.data.text}</p>
            <hr />
        </div>
    )
}

export default TodoItem 