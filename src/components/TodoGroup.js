import React from 'react'

const TodoGroup = ({
    group,
    onToggle
}) => { 
    console.log("in TodoGroup") 
    console.log(group.description)
    let idName = `group-${group.id}`
    let className = 'group'
    return (
        <div>
            <label>
                <input type='checkbox' id={ idName } className={ className } checked={ group.completed } value={ group.description } name={ group.description } />
                { group.description }
            </label>
        </div>
    )
}

export default TodoGroup