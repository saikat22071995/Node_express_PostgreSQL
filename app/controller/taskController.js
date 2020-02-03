const {Task}=require('../models/task')


//@to list all the tasks

module.exports.list=(req,res)=>{
    Task.findAll({})
    .then((tasks)=>{
        res.json(tasks)
    })
    .catch((err)=>{
        console.log(err)
    })
}


// @to create a task

module.exports.create=(req,res)=>{
    const body=req.body
    const task=new Task(body)
    console.log(task)
    task.save()
    .then((task)=>{
        res.json(task)
    })
    .catch((err)=>{
        console.log(err)
    })

}
