import React, { useState } from 'react'

export default function Header({ addTodo }) {
  const [todo, setTodo] = useState('')

  const pressEnter = (event) => {
    if(event.keyCode === 13) {
      addTodo(todo)
      setTodo('')
    }
  }

  return (
    <header className="header">
      <h1>todos</h1>
      <input 
        className="new-todo" 
        placeholder="What needs to be done?"
        value={todo}
        onChange={e => setTodo(e.target.value)}
        onKeyDown={pressEnter} 
      />
    </header>
  )
}