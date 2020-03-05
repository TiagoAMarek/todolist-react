import React, { useState } from 'react'
import './App.css'
import './CommonBase.css'

import Header from './Components/Header'
import List from './Components/List'
import Footer from './Components/Footer'

function App() {
  const [todos, setTodos] = useState([])

  const addTodo = todo => setTodos([...todos, todo])
  const removeTodo = idx => setTodos(todos.filter((todo, id) => id !== idx))

  return (
    <section className="todoapp">
      <Header addTodo={addTodo}></Header>
      <List todos={todos} removeTodo={removeTodo}></List>
      <Footer></Footer>
    </section>
  );
}

export default App
