var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  console.log('/* GET home page. */');
  res.json([
    {
      Description: 'Описание задачи 1',
      Status: 'В работе',
      Priority: 'Высокий',
      PrefTimeEnding: '-',
      RealTimeEnding: '2019-03-03'
    }
  ])
});

module.exports = router;
