const Sequelize=require('sequelize')
const db=require('../../config/database')
const {User}=require('../models/user')

const Task = db.define('task', 
{ 
    title: {
        type:Sequelize.STRING
    },
    user_id:{
        type:Sequelize.STRING,   
    }
 }
)

//@association

// Task.belongsTo(User,{foreignKey:'user_id'})



// Note: using `force: true` will drop the table if it already exists

// Task.sync({ force: true }).then(() => {
//         // Now the `users` table in the database corresponds to the model definition
//         return Task.create({
//           title: 'postgres',
//           user_id:'1'
//         });
//       });



module.exports={Task}
