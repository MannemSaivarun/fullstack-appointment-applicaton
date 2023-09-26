const User = require('../models/users');
// add-user 
exports.AddUser = async (req,res,next)=>{
        try {
            console.log('path is called', req.body);
            const username = req.body.username;
            const email = req.body.email;
            const phonenumber = req.body.phonenumber;
            //console.log("post request");
            const data = await User.create({username: username, email: email, phonenumber: phonenumber})
            res.status(201).json({newUserdetail: data});
    
        } catch (error) {
                res.status(500).json({
                error: error
            })
        }
    }

//get-user
exports.GetUsers = async (req,res,next)=>{
        try {
            const users = await User.findAll();
            res.status(200).json({userdetails: users})
        } catch (error) {
            console.log("error at getting users")
            res.status(500).json({error: error})   
        } 
    }

//delete-user

exports.DeleteUser = async (req,res)=>{
        try {
            // console.log(" deleting user")
            const userId = req.params.id;
            await User.destroy({where : {id: userId}});
            res.sendStatus(200)
        } catch (error) {
            console.log("error at deleting user")
            res.status(500).json({error: error})
        }
        
    }



