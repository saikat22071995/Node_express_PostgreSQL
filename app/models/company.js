const Sequelize=require('sequelize')
const db=require('../../config/database')

const Company = db.define('company', {
    // attributes
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    place: {
      type: Sequelize.STRING,
      allowNull: false
      // allowNull defaults to true
    }
  });



//@Note: using `force: true` will drop the table if it already exists

// Company.sync({ force: true }).then(() => {
//     // Now the `companys` table in the database corresponds to the model definition
//     return Company.create({
//       name: 'Rani Sati Pvt Ltd',
//       place: 'Bangalore'
//     });
//   });

module.exports={Company}

