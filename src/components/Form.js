import React from "react";


const Form =({inputText,setInputText,todos , setTodos, setStatus, })=> {
    //Add JS code and functions
    const inputTextHandler = (e) =>{
        console.log(e.target.value);
        setInputText(e.target.value);
    }
    const submitTodoHandler = (e) => {
        e.preventDefault();
        setTodos([
            ...todos, 
            {text: inputText, completed: false, id: Math.random() *1000} //if there is something already present in the list pass it in.
        ]);
        setInputText(""); //reset state after submit button has been clicked, UI needs to be updated separately.
    };
    const statusHandler = (e) => {
        setStatus(e.target.value);
    }
    return(
        <form>
            <input 
                value = {inputText} 
                onChange={inputTextHandler} 
                type="text" 
                className="todo-input">
                
            </input>
            <button onClick={submitTodoHandler} className="todo-button" type="submit">
                <i className = "fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select onChange={statusHandler} name="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Incomplete</option>

                </select>
            </div>
        </form>

    );

}

export default Form;
