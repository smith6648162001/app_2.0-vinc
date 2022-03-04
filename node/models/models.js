//Tenemos que definir 1 modelo porque solo hay una entidad.

//Se tienen que definir tantos modelo como entidades existan + sus relaciones n a n (En algunos cosas).


const {Sequelize,DataTypes} = require('sequelize');
const{database} = require('../database/db');

//console.log(database);

//Crear una instancia del modelo.

const ModeloPelicula = database.define('Pelicula',{

  title : {type: DataTypes.STRING},
  content : {type: DataTypes.STRING}
})

//console.log(ModeloPelicula);
module.exports.ModeloPelicula = ModeloPelicula;


