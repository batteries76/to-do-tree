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

arrayFromTree = createArrayFromTree(state)

console.log(arrayFromTree)