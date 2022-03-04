const { Sequelize } = require('sequelize');

const database = new Sequelize('peliculas','root','72618466DUBERsmith',{
  host: 'localhost',
  dialect: 'mysql'
});

module.exports.database = database;




/*try{
  database.authenticate();
  console.log('Conectado');
}catch(error){
  console.log('Algo está mal, revisemos');
}*/