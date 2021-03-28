module.exports = {
   
     // get all the category ( for the category view)
    getCategory:  (con,callback) =>{
       
        stmt = 'SELECT * FROM category ORDER BY name'
        con.query(stmt, callback)
        con.end()
    },
    // get all the subcategory ( for the subcategory view)
    getSubCateg:  (con, idCategory,callback) =>{
       
        stmt = 'SELECT * FROM sub_category WHERE category = ? ORDER BY name'
        con.query(stmt,[idCategory], callback)
        con.end()
    },
    // get the service of one subcategory( for the services list view)
    getProviderPerSubCateg:  (con,idSubCategory,callback ) => {
        stmt = 'SELECT first_name, name, id_service FROM service INNER JOIN user ON service.user = user.id_user WHERE sub_category = ? ' 
        con.query(stmt,[idSubCategory], callback)
        con.end()
    },
    // get one service of one category( for the provider view)
    getProvider: function(con,nameService,callback) {
        stmt = 'SELECT last_name,name, price , available from service INNER JOIN user ON service.user = user.id_user  WHERE name = ?'
        con.query(stmt,[nameService],callback)
    },

}