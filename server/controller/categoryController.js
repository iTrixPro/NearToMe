const serviceData = require("../model/services")

module.exports = {
    category: (req,res)=>{
        serviceData.getCategory(req.con, (err,rows)=>{
            console.log(rows);
            res.send(rows);
        })
    },
    subCategory: (req,res)=>{
        serviceData.getSubCateg(req.con, req.param('category'),(err,rows)=>{
            if(err)
                console.log("ERREUR");
            
            console.log(req.param('category'));
            res.send(rows);
        })
    },
    services : (req, res) =>{
        serviceData.getProviderPerSubCateg(req.con,req.param('sub_category'), (err,rows)=>{
            if(err)
                console.log("sub category unknown");
            
            console.log(rows);
            res.send(rows);
        })
    },
    provider : (req, res) =>{
        serviceData.getProvider(req.con, req.param('nameService'),(err,rows)=>{
            if(err)
                console.log("ERREUR");
            
            console.log(req.body.nameService);
            res.send(rows);
        })
    }
}