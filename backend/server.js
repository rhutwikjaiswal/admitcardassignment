const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());
 app.use(express.json());

const db = mysql.createConnection({
host :'localhost',
user : 'root',
password : '',
database : 'admitcard'
})

app.post('/signup', (req,res)=>{
    const sql = "INSERT INTO admitcard (`name`,`phone`, `school`, `class`, `rollnum`, `address`, `password`) VALUES (?) ";
        const values = [
        req.body.name,
        req.body.phone,
        req.body.school,
        req.body.class,
        req.body.rollnum,
        req.body.address,
        req.body.password
    ]
    db.query(sql,[values],(err, data)=>{
        if(err){
            return res.json("Error Occured");
        }
        if(data.length > 0){
         
            return res.json(data);
           }else{
            return res.json("fail");
           }
    })
})

app.listen(8081, ()=>{
    console.log('listening');
});