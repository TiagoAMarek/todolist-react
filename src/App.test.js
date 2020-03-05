import React from 'react'
import { render, fireEvent, cleanup } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'

describe('App Component', () => {
  describe('Given that the user wants to add a new task', () => {
    beforeEach(() => cleanup())

    test('Should type a text and click enter to add it to the list', async () => {
      const { getByPlaceholderText, getAllByTestId } = render(<App />)
      const inputContainer = getByPlaceholderText(/What needs to be done?/i)
      const task = 'My task'

      userEvent.type(inputContainer, task)
      fireEvent.keyDown(inputContainer, { key: 'Enter', keyCode: 13 })
      const todoItems = getAllByTestId('todo-item').map(li => li.textContent)

      expect(todoItems.length).toBe(1)
      expect(todoItems[0]).toBe(task)
    })
  })

  describe('Given that the user wants to remove a task', () => {
    beforeEach(() => cleanup())

    const tasks = [
      'task 1',
      'task 2',
      'task 3',
      'task 4',
      'task 5',
      'task 6',
      'task 7',
      'task 8',
    ]

    test('Should populate the list and remove an item by clicking X button', () => {
      const index = 5
      const { getByPlaceholderText, getAllByTestId } = render(<App />)
      const inputContainer = getByPlaceholderText(/What needs to be done?/i)

      tasks.forEach(task => {
        userEvent.type(inputContainer, task)
        fireEvent.keyDown(inputContainer, { key: 'Enter', keyCode: 13 })
      })

      const todoItem = getAllByTestId('todo-item').find((li, id) => id === index)
      const deleteButton = todoItem.querySelector('button.destroy')
      userEvent.click(deleteButton)

      const todoItems = getAllByTestId('todo-item').map(li => li.textContent)

      expect(todoItems.length).toBe(tasks.length - 1)
      expect(todoItems.includes(tasks[index])).toBeFalsy()
    })
  })
})
