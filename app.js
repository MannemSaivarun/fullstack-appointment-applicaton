const express = require('express');
const app = express();
const sequelize = require('./util/database');
const User = require('./models/users');
const bodyParser = require('body-parser');


const userRoutes = require('./routes/user');


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

var cors = require('cors');
app.use(cors());


app.use('/user',userRoutes);

// app.post('/user/add-user', async (req,res,next)=>{
//     try {
//         console.log('path is called', req.body);
//     const username = req.body.username;
//     const email = req.body.email;
//     const phonenumber = req.body.phonenumber;
//     //console.log("post request");
//     const data = await User.create({username: username, email: email, phonenumber: phonenumber})
//     res.status(201).json({newUserdetail: data});

//     } catch (error) {
//         res.status(500).json({
//             error: error
//         })
        
//     }
// })
// app.get('/user/get-users', async (req,res,next)=>{
//     try {
//         const users = await User.findAll();
//     res.status(200).json({userdetails: users})
//     } catch (error) {
//         console.log("error at getting users")
//         res.status(500).json({error: error})
        
//     }
    
// })

// app.delete('/user/delete-user/:id', async (req,res)=>{
//     try {
//         const userId = req.params.id;
//         await User.destroy({where : {id: userId}});
//         res.sendStatus(200)
//     } catch (error) {
//         console.log("error at deleting user")
//         res.status(500).json({error: error})
//     }
    
// })


sequelize.sync().then(result =>{
    app.listen(3000);
}).catch(err =>{
    console.log(err);
})