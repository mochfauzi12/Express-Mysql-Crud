
const express = require('express');
const UserHandler = require('../handler/users.js') 
const router = express.Router();

//CREATE POST
router.post('/' , UserHandler.createNewUser)

//READ
router.get('/', UserHandler.getAllUsers)

//UPDATE 
router.patch('/:idUser', UserHandler.updateUser)

// DELETE 
router.delete('/:idUser', UserHandler.deleteUser)



module.exports = router;


    