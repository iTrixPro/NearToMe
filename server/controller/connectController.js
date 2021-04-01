const userData = require("../model/user");
const bcrypt = require('bcrypt');
const saltRounds = 10;
module.exports = {
    get: (req,res) => {
       
        

       
    },
     connect: (req,res) => {
        const {email,password} = req.body;
   

        if(typeof email !== 'undefined' || typeof password !== 'undefined' ){
         
            userData.getUser(req.con,email, (err,rows)=> {
                if (rows.length==0) {
                    res.json({
                        "valid" : false,
                        "message" : "e-mail saisie incorrect !"
                    })
                }else{
                       //compare the given password and the hashed password from the database
                       bcrypt.compare(password,rows[0].password,
                        (err,result)=> 
                        { 
                            if (result == true) {
                                let firstname = rows[0].first_name[0].toUpperCase() + rows[0].first_name.substr(1)
                                let lastname = rows[0].last_name[0].toUpperCase() + rows[0].last_name.substr(1)
                                res.json({
                                    "valid" : true,
                                    "message" : "Success !",
                                    "name" : firstname + " " + lastname
                                })
                                //Access to the home page
                            } else {
                                res.json({
                                    "valid" : false,
                                    "message" : "mot de passe saisie incorrect !"
                                })
                            }
                        });
       
                    }
            })
        }
    },
    signup: (req,res) => {
        const {firstName,name,phone,email,password} = req.body;

        if (firstName == "") {
            res.json({
                "valid" : false,
                "message" : "Indiquer un prénom !"
            })
        } else if (name == "") {
            res.json({
                "valid" : false,
                "message" : "Indiquer un nom !"
            })
        } else if (phone == "") {
            res.json({
                "valid" : false,
                "message" : "Indiquer un numéro de téléphone !"
            })
        } else if (email == "") {
            res.json({
                "valid" : false,
                "message" : "Indiquer une adresse e-mail !"
            })
        } else if (password == "") {
            res.json({
                "valid" : false,
                "message" : "Indiquer un mot de passe !"
            })
        } else {
            bcrypt.hash(password, saltRounds, (err, hash) => {
                if (err) 
                console.log(err);
            
                userData.newUser(req.con,name,firstName,phone,email,hash,(err,rows) => {
                    if(err)
                        throw err;
                    res.json({
                        "valid" : true,
                        "message" : "Success !"
                    })    
    
                })
            })
        }
        
 
  },
   
   


}