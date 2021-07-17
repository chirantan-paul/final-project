let idmoro=0;
const tasks=(state=[],action) =>{
    switch(action.type){
        case 'Add_task':
            return [...state,{id: idmoro++, text: action.text, completed : false}]
        case 'Change_task_stat':
            return state.map(task=>(task.id===action.id)?{ ...task, completed:!task.completed}:task)
        default:
            return state
    }
}

export default tasks;