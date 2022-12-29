const model = require('../models/model');


const create_task = async(req, res)=>{
    const tasksData = req.body;
    const create = new model.Tasks(tasksData);
    await create.save(function(err){
        if(!err) return res.json(create);

        return res.status(400).json({message:`Error while creating task ${err}`})
    })
}


const get_tasks = async(req, res) =>{
    const email = req.params.email;
    let data = await model.Tasks.find({ userEmail:'' });
    res.json(data)

}

const delete_tasks = async(req, res) =>{
    
}


module.exports = {
    create_task,
    get_tasks
}