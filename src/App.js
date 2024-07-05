import React, { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([]);
  const [user, setUser] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = () => {
    if (input.trim()) {
      setTodos([...todos, input]);
      setInput("");
    }
  };

  const userName = () => {
    if (input.trim()) {
      setUser([...user, input]);
      setInput("");
    }
  };

  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  const deleteUser = (index) => {
    const newUser = user.filter((_, i) => i !== index);
    setUser(newUser);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">To-Do List</h1>
      <div className="flex justify-center mb-4">
        <input
          type="text"
          className="border p-2 rounded w-full max-w-md"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Fill Username"
        />
        <button
          className="ml-2 p-2 bg-green-500 text-white rounded"
          onClick={userName}
        >
          Set
        </button>
        <input
          type="text"
          className="border p-2 rounded w-full max-w-md ml-2"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Tambahkan kegiatan"
        />
        <button
          className="ml-2 p-2 bg-blue-500 text-white rounded"
          onClick={addTodo}
        >
          Add
        </button>
      </div>
      <div className='w-[1000px] p-4 bg-slate-600 rounded-lg m-auto'>
        <ul className="list-none p-0 w-3/4 m-auto">
          {user.map((user, index) => (
            <li key={index} className='flex justify-between items-center p-2 border-b text-white font-medium m-auto'>
              <h1 className='flex justify-center items-center'>List Kegiatan yang akan dilakukan oleh {user}</h1>
              <button
                className="text-white bg-red-600 p-2 rounded-md"
                onClick={() => deleteUser(index)}
              >
                Ganti
              </button>
            </li>
          ))}
          {todos.map((todo, index) => (
            <li key={index} className="flex justify-between items-center p-2 border-b text-white">
              <span>{todo}</span>
              <button
                className="text-white bg-red-600 p-2 rounded-md"
                onClick={() => deleteTodo(index)}
              >
                Hapus
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
