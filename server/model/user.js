module.exports = {
    get: function (con, callback) {
        con.query("SELECT * FROM user",callback)
    },

    getMeetings: function (con,callback,idUser,idService) {
        con.query('SELECT * FROM meeting WHERE user = ${idUser} AND service = ${idService} ',callback)
    },
    getProviderofSubCateg: function(con,callback,idUser,idService, idsubcateg){
        con.query("select ",callback)
    }
    
}