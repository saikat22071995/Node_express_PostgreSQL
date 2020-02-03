const {User}=require('../models/user')

//@to list all the users

module.exports.list=(req,res)=>{
    User.findAll({})
    .then((users)=>{
        res.json(users)
    })
    .catch((err)=>{
        console.log(err)
    })
}

//@to List 1 USer

module.exports.show=(req,res)=>{
    const id=req.params.id
    User.findOne({where:{id:id}})
    .then((user)=>{
        if(user){
            res.json(user)
        }
        else{
            res.json({})
        }
    })
    .catch((err)=>{
        console.log(err)
    })
}

//@to create a user

module.exports.create=(req,res)=>{
    const body=req.body
    const user=new User(body)
    console.log(user)
    //user.user=req.user._id
    user.save()
    .then((user)=>{
        res.json(user)
    })
    .catch((err)=>{
        console.log(err)
    })

}

//@to update a user

module.exports.update=(req,res)=>{
    const id=req.params.id
    const body=req.body
    User.update(body,{where:{id:id}})
    .then((user)=>{
        if(user){
            User.findOne({where:{id:id}})
            .then((user)=>{
                res.json(user)
            }) 
        }
        else{
            res.json({})
        }
    })
    .catch((err)=>{
        console.log(err)
    })
}

//@to delete a user

module.exports.destroy=(req,res)=>{
    const id=req.params.id
    User.destroy({where:{id:id}})
    .then((user)=>{
        if(user){
            res.status('200').send({notice:'User Deleted Successfully'})
        }else{
            res.json({})
        }
    })
    .catch((err)=>{
        console.log(err)
    })
}