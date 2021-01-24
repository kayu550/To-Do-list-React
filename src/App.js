import React, {useState, useEffect} from "react";
import './App.css';
import Form from "./components/Form.js";
import TodoList from "./components/ToDoList";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]); //array of to do list, in the form comp => submit and create object with data.
  //inputText is the actual value, setInputText allows you to modify the value.
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);
  useEffect(()=>{
    getLocalTodos();

  }, []);

  useEffect(()=>{
    filterHandler();
    saveLocalTodos();

  }, [todos, status]);
  const filterHandler = () =>{
    switch(status){
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true));
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;

    }
  };
  const saveLocalTodos = () =>{
    
    localStorage.setItem('todos', JSON.stringify(todos));    
  };
  const getLocalTodos = () => {
    if(localStorage.getItem('todos') === null){
      localStorage.setItem('todos', JSON.stringify([]))
    }else{
      let localTodo = JSON.parse(localStorage.getItem('todos'));
      console.log(localTodo);
      setTodos(localTodo);
    }



  };
  return (
    <div className="App">
      <header>
        <h1>Your To-Do List </h1>
      </header>
      <Form inputText ={inputText}
            todos={todos} 
            setTodos={setTodos}
            setInputText={setInputText}
            setStatus={setStatus}
            
            />
           
      <TodoList
            todos = {todos}
            setTodos = {setTodos}
            filteredTodos = {filteredTodos}
      
      />
    </div>
  );
}

export default App;
