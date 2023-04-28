
require('dotenv').config()
const PORT = process.env.PORT || 5000;
const express = require('express');

// get the client

const usersRoutes = require('./routes/users.js');
const middlewareLogRequest = require('./middleware/logs');
const upload = require('./middleware/multer.js');

const app = express();

app.use(middlewareLogRequest);
app.use(express.json());

app.use('/assets',express.static('public/images'))





app.use('/users', usersRoutes);

//upload image files
app.post('/upload',upload.single('photo'), (req, res) => {
    res.json({
        message: 'Uploading Succes'
    })
})

app.use((err, req, res, next) => {
    res.json ({
        message: err.message
    })
})


//const PORT = 4000;
app.listen(PORT, () => {
    console.log(`Server Running in port ${PORT}`);
});
