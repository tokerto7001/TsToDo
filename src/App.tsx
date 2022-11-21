import './App.css';
import React, { ChangeEvent, FormEvent, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import TodoComponent from './Todo';

interface Todo{
  id: string;
  text: string;
}


const App:React.FC = () => {

  const [todos, setTodos] = useState<Todo[]>([]);
  const [todo, setTodo] = useState<string>('');

  const handleChange = (event:ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setTodo(value);
  };

  const handleSubmit = (event:FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if(todo.trim() == '') return setTodo(''), alert('Please insert a new todo!');
    if(todos.filter((el) => el.text == todo.trim()).length) return setTodo(''), alert('This todo already exists!');
    setTodos((prevTodos) => [...prevTodos, { id: uuidv4(), text: todo }]);
    setTodo('');
  };

  const handleDelete = (id:string) => {
    if(todos.filter(el => el.id == id).length){
      setTodos(todos.filter(el => el.id != id));
    };
  };

  return (
    <div className="App">
    <form onSubmit={handleSubmit}>
      <input
       type="text"
       onChange={handleChange}
       value={todo}
       />
      <button>Add Todo</button>
    </form>
    <div className='todos'>
    {
      todos.map((el) => (
        <TodoComponent 
        data={el}
        handleDelete={handleDelete}
        />
      ))
    }
    </div>
    </div>
  );
}

export default App;
