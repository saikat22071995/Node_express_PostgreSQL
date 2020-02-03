const {Company}=require('../models/company')

module.exports.list=(req,res)=>{
    Company.findAll({})
    .then((books)=>{
        res.json(books)
    })
    .catch((err)=>{
        console.log(err)
    })
}
