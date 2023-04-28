const dbPool = require('../pkg/database')


const getAllUsers = () => {
    const Query = ' SELECT * FROM tblusers';
    
    return dbPool.execute(Query)
}

const createNewUser = (body) =>{
    const Query = `INSERT INTO tblusers (name, email, address) 
                   VALUES ('${body.name}', '${body.email}', '${body.address}')`;

     return dbPool.execute(Query);               
}

const updateUser = (body, idUser) => {
    const Query = `UPDATE tblusers 
                   SET name = '${body.name}', email = '${body.email}', address = '${body.address}' 
                   WHERE id = ${idUser}`
     return dbPool.execute(Query)              
}


const deleteUser = (idUser) => {
    const Query = `DELETE FROM tblusers WHERE id = ${idUser}`;

    return dbPool.execute(Query);

}


module.exports = {
    getAllUsers,
    createNewUser,
    updateUser,
    deleteUser,
};



