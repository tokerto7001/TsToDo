import React from 'react'

interface TodoData {
    data: {
        id: string;
        text: string
    };
    handleDelete: (id:string) => void;
}

const Todo:React.FC<TodoData> = ({data, handleDelete}) => {
  return (
    <div className='todo-displayed'>
        <p>{data.text}</p>
        <button onClick={() => handleDelete(data.id)}>Delete</button>
    </div>
  )
}

export default Todo;