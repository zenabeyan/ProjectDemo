const Task = require('../models/Task')


const getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find({})
        res.json(tasks)
    } catch (e) {
        res.json({msg: e.message})
    }
}

const createTask = async (req, res) => {
    try {
        const task = await Task.create(req.body)
        res.json({task})
    } catch (e) {
        res.send({msg: e.message})
    }

}
const getTask = async (req, res) => {
    try {
        const task = await Task.findById(req.params.id)
        res.json(task)
    } catch (e) {
        res.json({msg: e})
    }

    //res.json(`id: ${req.params.id}`)
}
const updateTask = async (req, res) => {
    try {
        // const {id :taskID} = req.params;
        const task = await Task.findOneAndUpdate(req.params.id, req.body,{
            new:true,
            runValidators:true
        })
        res.json(task)
    } catch (e) {
        res.json({msg: e.message})
    }
}
const deleteTask = async (req, res) => {
    try {
        const task = await Task.findOneAndDelete(req.params.id)
        res.json(task)
    } catch (e) {
        res.json({msg: e})
    }
}

module.exports = {
    getAllTasks, createTask, getTask, deleteTask, updateTask
}