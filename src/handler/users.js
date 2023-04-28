const UsersModel = require('../models/repo-users');

const getAllUsers = async (req, res) => {
    try {
        
        const [data] = await UsersModel.getAllUsers();

    res.json({
        message: 'GET All Users Success',
        data: data
    });


    } catch (error) {
        res.status(500).json({
            message: 'Server error not connected',
            serverMessage: error
        })
    }
    
};

const createNewUser = async (req, res) => {
   
    const {body} = req;

    if(!body.email || !body.name  || !body.address) {
        return res.status(400).json({
            message: 'Anda mengirimkan data yang salah',
            data:null,
        })
    }

    try {

        await UsersModel.createNewUser(body);
        res.status(201).json({
            message: 'CREATE new user success',
            data: req.body
        })
        
    } catch (error) {
        res.status(500).json({
            message: 'Server error not connected',
            serverMessage: error
        })
        
    
    }
    
}


const updateUser = async (req, res) => {
    const {idUser} = req.params;
    const {body} = req;
    try {
        await UsersModel.updateUser(body,idUser)
        console.log('idUser : ' , idUser);
        res.json({
            message: 'UPDATE User Succesfully',
            data: {
                id: idUser,
                ...body
            },
    })
    } catch (error) {
        res.status(500).json({
            message: 'Server error not connected',
            serverMessage: error
        })
    }

}



const deleteUser = async (req, res) => {
    const {idUser} = req.params;
    try {
        await UsersModel.deleteUser(idUser);
        res.json({
            message: 'DELETE user successfully',
            data: null
        });
    } catch (error) {
        res.status(500).json({
            message: 'Server error not connected',
            serverMessage: error
        });
    }
};


 

module.exports = {
    getAllUsers,
    createNewUser,
    updateUser,
    deleteUser,
}