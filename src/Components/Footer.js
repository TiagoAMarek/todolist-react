import React from 'react'

export default function Footer() {

  const displayBlock = {
    display: 'block',
  }

  return (
    <footer className="footer" style={displayBlock}>
      <span className="todo-count"><strong>1</strong> items left</span>
      <ul className="filters">
        <li>
          <a href="#/" className="selected">All</a>
        </li>
        <li>
          <a href="#/active" className="">Active</a>
        </li>
        <li>
          <a href="#/completed">Completed</a>
        </li>
      </ul>
      <button className="clear-completed" style={displayBlock}>Clear completed</button>
    </footer>
  )
}