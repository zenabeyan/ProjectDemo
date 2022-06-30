const getAllTasks = (req,res)=>{
    res.send('get All items')
}

const createTask = (req,res)=>{
    res.send('create Tasks')
}
const getTask = (req,res)=>{
    res.json(`id: ${req.params.id}`)
}
const updateTask = (req,res)=>{
    res.send('update task')
}
const deleteTask = (req,res)=>{
    res.send('delete task')
}

module.exports = {
    getAllTasks,createTask,getTask,deleteTask,updateTask
}