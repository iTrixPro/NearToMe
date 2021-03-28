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
                    console.log("Connexion incorrecte: la personne "+email +" n'existe pas")
                }else{
                       //compare the given password and the hashed password from the database
                       bcrypt.compare(password,rows[0].password,
                        (err,result)=> 
                        { 
                            if (result == true) {
                                console.log("Bienvenue mr." + rows[0].last_name);
                                //Access to the home page
                            } else {
                                console.log("Wrong username/password combination!" );
                            }
                        });
       
                    }
            })
        }
    },
    signup: (req,res) => {
        const {firstName,name,phone,email,password} = req.body;
        
        bcrypt.hash(password, saltRounds, (err, hash) => {
            if (err) 
            console.log(err);
            
            userData.newUser(req.con,name,firstName,phone,email,hash,(err,rows) => {
                if(err)
                     throw err;
                     console.log(password)
                     console.log(hash)
                console.log("Création de l'utilisateur " + name+ " " + firstName)
    
            })
        })
        
 
  },
   
   


}