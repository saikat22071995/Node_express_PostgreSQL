
//@user Model
//@attributes-firstname,lastname,comapany_id



const Sequelize=require('sequelize')
const db=require('../../config/database')
const {Company}=require('../models/company')
const {Task}=require('../models/task')

const User = db.define('user', {
    // attributes
    firstName: {
      type: Sequelize.STRING,
      allowNull: false
    },
    lastName: {
      type: Sequelize.STRING
      // allowNull defaults to true
    },
    companyId:{
      type:Sequelize.STRING
    }
  });

  User.belongsTo(Company,{foreignKey: 'companyId'}); 
  
  
// User.hasMany(Task,{as: 'tasks', foreignKey: 'id'})   


// Note: using `force: true` will drop the table if it already exists
// User.sync({ force: true }).then(() => {
//     // Now the `users` table in the database corresponds to the model definition
//     return User.create({
//       firstName: 'John',
//       lastName: 'Hancock',
//       companyId:'1',
//     });
//   });

module.exports={User}

