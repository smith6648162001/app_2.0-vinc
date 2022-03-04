const {ModeloPelicula} = require('./models');

//La función para mostrar todas las instancias
//sql: select * from table

const getAllMovies = async(req,res)=>{
  try{
    const Peliculas = await ModeloPelicula.findAll();
    res.json(Peliculas);
  } catch(error){
    res.json({message : 'No se encontraron instancias'})
  }
}

//La función para mostrar solo 1 instancia
//sql : select * from table where id_pelicula = 1;

const getOneMovie = async(req,res)=>{
  try{
    const Pelicula_unica = await ModeloPelicula.findAll({where:{id: req.params.id}});
    res.json(Pelicula_unica);
  }catch (error){
    res.json({message : 'No se encontró instancia'})
  }
}


//La función para crear un registro
//sql: insert into table ...{'300',....}

const createOneMovie = async(req,res)=>{
  try{
    await ModeloPelicula.create(req.body);
    res.json({message:'Registro creado satisfactoriamente'});
  } catch(error){
    res.json({message:'No se ha realizado ningún registro'});
  }
}



//La función para actualizar un registro

const updateOneMovie = async(req,res)=>{
  try{
    await ModeloPelicula.update(req.body({
      where:{id:req.params.id}
    }));
    res.json({message:'Registro actualizado'});
  }catch(error){
    res.json({message:'No se ha podido actualizar el registro'});
  }
}





//La función para eliminar un registros (=> ModeloPelicula)

const deleteOneMovie = async(res,req)=>{
  try{
    await ModeloPelicula.destroy({
      where : {id : req.params.id}
    });
    res.json({message:'Eliminado correctamente'});
  }catch(error){
    res.json({message:'No se pudo eliminar'});
  }
}

module.exports = {getAllMovies,getOneMovie,createOneMovie,updateOneMovie,deleteOneMovie};