import React from 'react'

export default function List({ todos }) {
  
  const displayBlock = {
    display: 'block',
  }

  return (
    <section className="main" style={displayBlock}>
      <input id="toggle-all" className="toggle-all" type="checkbox" />
      <label htmlFor="toggle-all">Mark all as complete</label>
      <ul className="todo-list">
        {todos.map((todo, index) => (
          <li key={index} data-testid="todo-item">
            <div className="view">
              <input className="toggle" type="checkbox" />
              <label>{ todo }</label>
              <button className="destroy"></button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}

/*
<li data-id="1531397960010" className="completed">
  <div className="view">
    <input className="toggle" type="checkbox" />
    <label>Learn The Elm Architecture ("TEA")</label>
    <button className="destroy"></button>
  </div>
</li>
<li data-id="1531397981603" className="">
  <div className="view">
    <input className="toggle" type="checkbox" />
    <label>Build TEA Todo List App</label>
    <button className="destroy">
    </button>
  </div>
</li>
*/