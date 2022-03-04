const express = require('express');
const router = express.Router();
const {getAllMovies,getOneMovie,createOneMovie,updateOneMovie,deleteOneMovie} = require('../models/fun_model');

router.get('/',getAllMovies);
router.get('/:id',getOneMovie);
router.post('/',createOneMovie);
router.delete('/:id',deleteOneMovie);
router.put('/:id',updateOneMovie);

module.exports.inicio = router;
