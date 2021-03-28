
    module.exports = {
        // User connection and Creation
        getUser:(con,email,callback) => {
            stmt = 'SELECT * FROM user WHERE email = ?'
           con.query(stmt,[email],callback)
      
        },
        newUser:(con,lastName,firstName,phone,email,password,callback) => {
            stmt = 'INSERT INTO user VALUES(null,?,?,?,?,?,?)'
            con.query(stmt,
                [lastName.trim(),
                    firstName.trim(),
                    phone.trim(),
                    email.trim(),
                    password.trim(),
                    0
               ],
                callback)
    
        },
        // Home data for user(his meetings, the popular services and sub Categories)

        getUserMeetings:(con,userName,callback) =>{
            stmt = 'SELECT m.time, s.name FROM meeting m INNER JOIN service s ON s.id_service = m.service' 
                +' INNER JOIN user ON m.user  = user.id_user' 
                +' WHERE user.last_name = ? AND date = CURRENT_DATE'
    
            con.query(stmt,[userName],callback)
            con.end()
        },
        getPopularSubcateg:(con,callback) => {
              stmt = 'SELECT name, id_subCateg from sub_category ORDER BY popularity DESC LIMIT 1,10'
              con.query(stmt, callback)  
              con.end()
        },
        getPopularService:(con,callback) => {
            stmt = 'SELECT name, id_service from service ORDER BY pupularity DESC LIMIT 1,10'
            con.query(stmt, callback)  
            con.end()
      },
        // get all the meetings for the service wanted (for the )
        getMeetings:  (con,callback,idService)=> {
            stmt = 'SELECT * FROM meeting WHERE  AND service = ? '
            con.query(stmt,[idService],callback)
            con.end()
        },
        // get all the available dates from the service ( for the service view)
        getAvailables: (con,idProvider,callback)=> {
            
            stmt = 'select available from service where id_service = ? '
            con.query(stmt,[idProvider], callback)
            con.end()
        },
        
        // create a meeting between a user and a service(When the user select a date)
        createMeetings: (con,user,service,date,time, callback) =>{
            
            stmt = 'INSERT INTO meeting VALUES(null,?,?,?,?)'
            con.query(stmt,[user,service,date,time],callback)
        },
        
        isProvider:(con,email,callback) => {
            stmt = 'SELECT provider FROM user WHERE email = ?'
            con.query(stmt,[email],callback)
        },        
    }
   
    