/* const mysql = require('mysql');


const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',


    database: 'dheeraj',
    password: 'root123'
});

connection.connect(function(err, result){
    if (err) throw error;
    console.log("Sucessfully connected to database " )

    connection.query('select * from secondyear' , (err,result) => {
        if(err) throw error;                                          //hence we have succesfully connected to the database 
        console.log(result[0].stud_name);  //if we want the first row only we user console.log(result[0]) , mo specificly is the name of the first row 
                              // we use console.log(result[0].name)
    })
}) */



// to Connect using Postgrace SQL Server

//1> install the postgrace libraries as pg 

const { Client } = require('pg');

const pool = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'XYZ',
  password: 'dheerajprasad',
  port: 5432,
});



/* pool.connect(function(err, result){
    if(err) throw err;
    console.log('Successfully connected to database')

})
 */
module.exports= pool;