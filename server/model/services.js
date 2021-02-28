module.exports = {
     // Query for the service view
    get: function (con,callback) {
        sql = 'SELECT * FROM service '
        con.query(sql,callback)
    },
    getSubCateg: function (con,callback, idCategory) {
       
        sql = 'SELECT * FROM sub_category WHERE category = '+ idCategory +' ORDER BY name'
        con.query(sql, callback)
    },
    // Query for the services view
    getProviderPerSubCateg: function (con,callback, idSubCategory) {
        sql = 'SELECT first_name, name FROM service INNER JOIN user ON service.user = user.id_user WHERE sub_category = '+ idSubCategory
        con.query(sql, callback)
    },
    getService: function(con,nameService,callback) {
        sql = 'SELECT first_name,last_name,name, price , available from service INNER JOIN user ON service.user = user.id_user  WHERE name = '+ nameService
        con.query(sql,callback)
    }

}
