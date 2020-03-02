var express = require('express');
var router = express.Router();
const mysql = require('mysql2') 
const escape = require('sql-template-strings');
const pool = mysql.createPool({
  host: 'localhost',
  database: 'reacts',
  user: 'root',
  password: "Adminspassword"
}).promise();

router.get('/', function(req, res, next) {
  let sqlstring = escape`select 
  t.task_description as Description,
  ts.status_name as Status,
  tp.priority_name as Priority,
  t.task_pref_time_ending as PrefTimeEnding,
  t.task_real_time_ending	as RealTimeEnding
from reacts.tasks as t
  inner join reacts.task_priority as tp on tp.priority_id = t.task_priority
  inner join reacts.task_statuses as ts on ts.status_id = t.task_status;
`;
  pool.execute(sqlstring)
    .then(rows=>{
        console.log('server: tasks='+ rows[0][0].Description);
        res.json(rows[0]);
    })
    .catch(err=>console.log('error in execute ' +err))  
}); 

router.get('/count', function(req, res, next) {
  let sqlstring = escape`
    select
        count(t.task_description) as total,
        count(case when t.task_status = 1 then t.task_description end) as newones,
        count(case when t.task_status = 2 then t.task_description end) as inprocess,
        count(case when t.task_status = 3 then t.task_description end) as completed
    from reacts.tasks as t
        inner join reacts.task_priority as tp on tp.priority_id = t.task_priority
        inner join reacts.task_statuses as ts on ts.status_id = t.task_status;
`;
  pool.execute(sqlstring)
    .then(rows=>{
        console.log('server: count='+ rows[0][0].total);
        res.json(rows[0][0]);
    })
    .catch(err=>console.log('error in execute ' +err))  
}); 


module.exports = router;
