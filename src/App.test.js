import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'

describe('App Component', () => {
  describe('Given that the user wants to add a new task', () => {
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
})
