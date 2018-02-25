import React from 'react'

const TodoTasksStatus = ({
  totalCount,
  incompletedCount
}) => (
  <div>
    <p>{ incompletedCount } remaining</p>
    <p>{ totalCount } done</p>
  </div>
)

export default TodoTasksStatus