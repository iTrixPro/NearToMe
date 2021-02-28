const UserData = require("../model/user");
const ServiceData = require("../model/services")
module.exports  = {
    category: function(req,res){
        ServiceData.get(req.con, function(err,rows){
            console.log(rows);
            res.send(rows);
        })
    },
    service: function(req,res){
        ServiceData.getService(req.con ,req.param('name'),function(err,rows){
            console.log(req.param('name'));
            res.send(rows);
        })
    }
    
}
