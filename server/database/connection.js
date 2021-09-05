const mysql = require ('mysql');

const db = mysql.createConnection({
    host: 'localhost', 
    user: 'root', 
    password: '', 
    database: 'Users',
    timezone: 'utc'
});

const conn = async()=>{
    try {
        await db.connect(err =>{
            if(err){
                throw err
            }
            console.log('MySQL connected');
        });
    } catch (error){
        
    }
}
module.exports = conn;
module.exports.db = db;
