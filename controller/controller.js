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
    // console.log({email});
    let data = await model.Tasks.find({
        userEmail: email,
        isComplete:false
    });
    res.json(data)

}

const get_complete_tasks = async(req, res) =>{
    const email = req.params.email;
    let data = await model.Tasks.find({
        userEmail:email,
        isComplete:true
    });
    res.json(data)
}

const update_task_complete = async(req, res) =>{
    const id = req.body;
    // console.log(id);
    let data = await model.Tasks.findOneAndUpdate(id, {isComplete:true}, {new:true})
    // console.log(data);
    res.json(data)
}

const post_comment= async(req, res) =>{
    const arrayOfData = req.body;
    let data = await model.Tasks.updateOne(
        arrayOfData[1], { $push:{ comments: arrayOfData[0] } }, {new:true}
    )
    res.json(data)
    
}

const update_task_not_completed = async(req, res)=>{
    const id = req.body;
    let data = await model.Tasks.findOneAndUpdate(id, {isComplete:false}, {new:true})
    res.json(data)
}

const delete_tasks = async(req, res) =>{
    if(!req.body) res.status(400).json({message:"Request body not found"})
    await model.Tasks.deleteOne(req.body, (err)=>{
        if(!err) res.json("Record Deleted...")
    }).clone().catch(function(err){
        res.json("Error while deleting transaction record..")
    });
}


module.exports = {
    create_task,
    get_tasks,
    delete_tasks,
    update_task_complete,
    post_comment,
    update_task_not_completed,
    get_complete_tasks
}