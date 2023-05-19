const Task = require('../models/Task');

//GET ALL
const getAllTask = async (req, res) => {
    try {
        const task = await Task.find({})
        res.status(200).json({ task:task }) 
    } catch (error) {
        res.status(500).json({ msg: error })
    }
}


//POST
const createTask = async (req, res) => {
    try {
        const task = await Task.create(req.body)
        res.status(201).json({ task })
    } catch (error) {
        res.status(500).json({ msg: error })
    }
}

//GET SINGLE TASK
const getTask = async (req, res) => {
    try {
        const { id } = req.params
        const getOneTask = await Task.findOne({ _id:id })

        if(!getOneTask){
            return res.status(404).json({ msg:`No task with id: ${id}`})
        }

        res.status(200).json({ getOneTask})
    } catch (error) {
        res.status(500).json({ msg:error })
    }
}

//UPDATE TASK   
const updateTask = (req, res) => {
    res.send('Update the task');
}

//DELETE TASK
const deleteTask = async (req, res) => {

    try {
        const { id } = req.params;
        const deleteTask = await Task.deleteOne({ _id:id });

        if(!deleteTask){
            res.status(404).json({ msg: `No task found to delete ${id}`})
        }

        res.status(200).json({ msg: `Deleted ${id} successfully` });
    } catch (error) {
        res.status(500).json({ msg: `Something went wrong`})
    }
}


module.exports = {
    getAllTask,
    createTask,
    getTask,
    updateTask,
    deleteTask
};