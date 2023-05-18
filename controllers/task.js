const Task = require('../models/Task');

//GET ALL
const getAllTask = (req, res) => {
    res.send("All Items")
}


//POST
const createTask = async (req, res) => {
    const task = await Task.create(req.body)
    res.status(201).json({task})
}

//GET SINGLE TASK
const getTask = (req, res) => {
    res.json({id:req.params.id})
}

//UPDATE TASK   
const updateTask = (req, res) => {
    res.send('Update the task');
}

//DELETE TASK
const deleteTask = (req, res) => {
    res.send('Delete the task')
}


module.exports = {
    getAllTask,
    createTask,
    getTask,
    updateTask,
    deleteTask
};