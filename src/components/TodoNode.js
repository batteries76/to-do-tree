import React from 'react'

const TodoNode = ({
  ...node,
  key 
}) => {
  return (
    <label>
      <input type='checkbox' key={ key } checked={ node.completed } value={ node.description } />
      { node.description }
    </label>
  )
}

export default TodoNode