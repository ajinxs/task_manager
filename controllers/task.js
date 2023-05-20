// const Task = require('../models/Task');

// //GET ALL
// const getAllTask = (req, res) => {
//     res.send("All Items")
// }


// //POST
// const createTask = async (req, res) => {
//     const task = await Task.create(req.body)
//     res.status(201).json({task})
// }

// //GET SINGLE TASK
// const getTask = (req, res) => {
//     res.json({id:req.params.id})
// }

// //UPDATE TASK   
// const updateTask = (req, res) => {
//     res.send('Update the task');
// }

// //DELETE TASK
// const deleteTask = (req, res) => {
//     res.send('Delete the task')
// }


// module.exports = {
//     getAllTask,
//     createTask,
//     getTask,
//     updateTask,
//     deleteTask
// };


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


//DELETE TASK
const deleteTask = async (req, res) => {

    try {
        const { id } = req.params;
        const deleteTask = await Task.findOneAndDelete({ _id:id });

        if(!deleteTask){
            res.status(404).json({ msg: `No task found to delete with id - ${id}`})
        }

        res.status(200).json({ msg: `Deleted ${id} successfully` });
    } catch (error) {
        res.status(500).json({ msg: `Something went wrong`})
    }
}


//UPDATE TASK   
const updateTask = async (req, res) => {
    try{
        const { id } = req.params;
        const updateTask = await Task.findOneAndUpdate({ _id:id }, req.body, {
            new:true,
            runValidators:true,
        })

        if(!updateTask){
            res.status(404).json({ msg: `Cannot find that task`})
        }

        res.status(200).json({ msg: `Update task successfully no - ${id}`})
    }catch(error){
        res.status(500).json({ msg: `Cannot update something wrong`})
    }
}





module.exports = {
    getAllTask,
    createTask,
    getTask,
    updateTask,
    deleteTask
};