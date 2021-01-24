import React from 'react';
import ToDoList from './ToDoList';

const Todo = ({text, todos, setTodos, todo}) => {
    //events to delete 
    const deleteHandler = () => {
        setTodos(todos.filter((el)  => el.id !== todo.id)) //element that is clicked is matcehd to that one that is in state.
   

    };
    // const completeHandler = () => {
    //     setTodos(todos.map((item) => {
    //         if(item.id === todo.id){
    //             return {
    //                 ...item, completed : !item.completed
    //             }
    //             return item;
    //         }
           
    //     }))

    // }
    const completeHandler = () => {
        setTodos(todos.map(item => {
            if(item.id === todo.id){
                return {
                    ...item, completed : !item.completed
                }
                return item;
            }
            return item;
           

        }))
    }
    return(
        <div className="todo">
            <li className={`todo-item ${todo.completed ? "completed" :  ''}`}>
                {text}
            </li>
            <button onClick={completeHandler} className="complete-btn">
                <i className="fas fa-check"></i>
            </button>
            <button onClick={deleteHandler} className="trash-btn">
                <i className="fas fa-trash"></i>
            </button>
        </div>

    )
}

export default Todo;