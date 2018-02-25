import React, { Component } from 'react';
import './App.css';
import TodoNode from './components/TodoNode'
import TodoGroup from './components/TodoGroup'
import TodoTasksStatus from './components/TodoTasksStatus'

const countIncompleteTasks = (tasks) => {
  let counter = 0;
  tasks.forEach((task) => {
    if (task.completed === false) {
      counter += 1
    }
  })
  return counter
}

const toggleTaskAtId = (tasks, id) => {
  const task = tasks.find((task) => {
    if (task.id === id) {
      console.log(task)
      return task
    }
    return null
  })
  if (task) {
    task.completed = !task.completed
  }
  // tasks[indexToToggle] = { ...task, completed: !task.completed }
  return tasks
}

const setBranchDone = () => {

}

const getAllLevels = () => {
  return null
}

class App extends Component {
  state = {
    treeArray: [],
    focusLevel: 1,
    nodes: [
      {
        level: 3,
        type: 'order',
        description: 'Language Learning',
        completed: false,
        nodeId: 1,
        phylumId: 1,
        children: 2,
        nodes: [
          { 
            level: 2,
            type: 'genus',
            description: 'Cantonese',
            completed: false, 
            nodeId: 1,
            orderId: 1,
            children: 2,
            nodes: [
              { 
                level: 1,
                type: 'species',
                description: 'Cantonese grammar', 
                completed: false, 
                genusId: 1, 
                nodeId: 1,
                children: 1,
                nodes: [
                  {
                    level: 0,
                    type: 'item',
                    description: 'Read chapter of textbook',
                    completed: false,
                    nodeId: 1,
                    speciesId: 1
                  }
                ]
              },
              { 
                level: 1,
                type: 'species',
                description: 'Cantonese vocab', 
                completed: false, 
                genusId: 1, 
                nodeId: 2,
                children: 0,
                nodes: []
              }
            ]
          },
          { 
            level: 2,
            type: 'genus',
            description: 'Japanese', 
            completed: false, 
            nodeId: 2,
            orderId: 1,
            children: 2,
            nodes: [
              { 
                level: 1,
                type: 'species',
                description: 'Japanese vocab', 
                completed: false, 
                genusId: 2, 
                nodeId: 3,
                children: 0,
                nodes: []
              },
              { 
                level: 1,
                type: 'species',
                description: 'Japanese grammar', 
                completed: false, 
                genusId: 2, 
                nodeId: 4,
                children: 0,
                nodes: []
              }
            ]
          }
        ]
      },
      {
        level: 1,
        type: 'species',
        description: 'Strength training', 
        completed: false, 
        genusId: null, 
        nodeId: 2,
        children: 1,
        nodes: [
          {
            level: 0,
            type: 'item',
            description: 'Leg weights',
            completed: false,
            nodeId: 1,
            speciesId: 1
          }
        ]
      }
    ]
  }

  createArrayFromTree = (tree) => {
    if (tree.nodes.length == 0) { 
      return []
    }
    else {
      
    }
  }

  onChangeItemDescriptionAtId = (id, description) => {
  
  }

  getGroupsCompleted = (tasks) => {
    const groupIdArray = []
    tasks.forEach((task) => {
      if (task.completed){
        if (!groupIdArray.includes(task.groupId)){
          groupIdArray.push(task.groupId)
        }
      }
    })
    return groupIdArray
  }

  toggleGroup = () => {
    this.setState((prevState) => {
      let groups = prevState.groups
      let tasks = prevState.tasks
      let groupIdArray = this.getGroupsCompleted(tasks)
      groups.forEach((group) => {
        if (groupIdArray.includes(group.id)) {
          group.completed = true 
        }
        else {
          group.completed = false
        }
      })
    })
  }

  onToggleTaskAtId = (id) => {
    this.setState((prevState) => {
      let tasks = prevState.tasks
      tasks = toggleTaskAtId(tasks, id)
      return { tasks }
    })
    this.toggleGroup()
  }

  render() {
    const state = this.state
    const nodes = state.nodes

    return (
      <div className="App">
        {
          nodes.map((node) => {
            console.log(node)
            return (
              <TodoNode
                { ...node }
                key={ node.nodeId }
              />
            )
          })
        }
        {/* {
          <AddNewSpecies

          /> */}
        {/* // }
        // <TodoTasksStatus */}
        {/* //   totalCount={tasks.length}
        //   incompletedCount={ countIncompleteTasks(tasks) }
        // />
        // {
        //   groups.map((group) => {
        //     console.log(group)
        //     return (
        //       <TodoGroup
        //         group={ group }
        //         key={ group.id }
        //       />
        //     )
        //   })

        // } */}
      </div>
    );
  }
}

export default App;
