const userData = require("../model/user");
const serviceData = require("../model/services")
module.exports = {
    //create the page
    get: (req,res) => {
       /*create the main page, and show teh meetings, popular service and 
         popular providers (use of the fonctions userMeetings, popularService and popularProviders which will render the JSONS DATA )
       */

    },
    //take the meetings of the day
    userMeetings: (req,res) => {
        userData.getUserMeetings(req.con, (err,rows)=>{
            console.log(rows[1].id_category);
            res.send(rows);
        })
    },
    //take the popular service from the database
    popularService: (req,res) => {
        userData.getPopularSubcateg(req.con, (err,rows)=>{
            console.log(rows[1].id_category);
            res.send(rows);
        })
    },
    //take the populars providers from the database
    popularProviders: (req,res) => {
        userData.getPopularService(req.con, (err,rows)=>{
            console.log(rows[1].id_category);
            res.send(rows);
        })
    }
}