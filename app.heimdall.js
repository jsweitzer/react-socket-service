var app = require('express')();
var crypto = require('crypto');
var http = require('http').Server(app);
var io = require('socket.io')(http);
var MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;
var url = "mongodb://localhost:27017/";
var templates = require('./templates/canvasjs.charts');

//set global mongo connections
var db;
function InsertChartTemplate(type){
  var data = [];
  var chart = {};
  if(type === 'line'){
    data = JSON.parse(JSON.stringify(templates.LineChartData));
    chart = JSON.parse(JSON.stringify(templates.LineChart));
  }else if (type === 'stepLine'){
    data = JSON.parse(JSON.stringify(templates.StepLineChartData));
    chart = JSON.parse(JSON.stringify(templates.StepLineChart));
  }else if (type === 'area'){
    data = JSON.parse(JSON.stringify(templates.AreaChartData));
    chart = JSON.parse(JSON.stringify(templates.AreaChart));
  }else if (type === 'spline'){
    data = JSON.parse(JSON.stringify(templates.SplineChartData));
    chart = JSON.parse(JSON.stringify(templates.SplineChart));
  }else if (type === 'stepArea'){
    data = JSON.parse(JSON.stringify(templates.StepAreaChartData));
    chart = JSON.parse(JSON.stringify(templates.StepAreaChart));  
  }else if (type === 'splineArea'){
    data = JSON.parse(JSON.stringify(templates.SplineAreaChartData));
    chart = JSON.parse(JSON.stringify(templates.SplineAreaChart));  
  }else if (type === 'pie'){
    data = JSON.parse(JSON.stringify(templates.PieChartData));
    chart = JSON.parse(JSON.stringify(templates.PieChart));  
  }else{
    chart = JSON.parse(JSON.stringify(templates.BarChart));
  }
  
  chart.is_active = 1;
  console.log('CHART' + JSON.stringify(chart))
  //chart._id = new ObjectID();
  chart;
  console.log('DATA'+JSON.stringify(data[0]));
  
  InsertChart(function(id){
    console.log('in insert chart');
  }, chart);
}
var TimeChunk = [];



MongoClient.connect(url, function(err, con){
  db = con;
  InsertChartTemplate('line');
});

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
  socket.on('subscribeToTimer', (interval) => {
    setInterval(() => {
      socket.emit('timer', new Date()
    );
    },
    interval);
  });
  socket.on('subscribeToData', (interval, id) => { 
      GetData(id, function(data)
      {
        console.log(JSON.stringify(TimeChunk));
        data.options.data[0].dataPoints=data.options.data[0].dataPoints.map(function(val, i){
          val.y = 600*Math.random();
          val.x = TimeChunk[i];
          return val;
        });
        console.log('inthedatamethod');
        socket.emit('data', data);
      })
      setInterval(() => {
        GetData(id, function(data)
        {
          console.log(JSON.stringify(TimeChunk));
          data.options.data[0].dataPoints=data.options.data[0].dataPoints.map(function(val, i){
            val.y = 600*Math.random();
            val.x = TimeChunk[i];
            return val;
          });
          
          socket.emit('data', data);
        })
      }, interval);
    });
    socket.on('subscribeToCharts', (id) => {
      GetCharts(id, function(data){
        socket.emit('charts', data);
      });
    });
    socket.on('disableChart', (id) => {
      DisableChart(id);
    });
    socket.on('insertChart', (type) => {
        InsertChartTemplate(type);
    });
    socket.on('updateChart', (data, cb) => {
        UpdateChart(data, function(){
          GetCharts(null, function(data){
            socket.emit('charts', data);
          });
        });
    });
    socket.on('getData', (data, cb) => {
      UpdateChart(data, function(){
        GetData(data, function(data){
          socket.emit('data', data);
        });
      });
  });
});
function Chunker(){
  TimeChunk.push(new Date());
  if(TimeChunk.length > 1){
    TimeChunk.shift();
  }
}
function GetCharts(id, cb){
  var dbo = db.db("chartdb");
  dbo.collection("charts").find({"is_active": 1}).toArray(function(err, res){
      cb(res);
  });
}
function GetData(id, cb){
  var dbo = db.db("chartdb");
  var o_id = new ObjectID(id);
  var charts = dbo.collection("charts").find({ "_id": o_id});
    charts.forEach(function(c){
      cb(c);
  });
}
function InsertChart(cb, chart){
  var dbo = db.db("chartdb");
  console.log("inserting chart " + JSON.stringify(chart));
  dbo.collection("charts").insertOne(chart, function(err, res) {
    if (err) throw err;
    console.log("chart inserted " + chart._id);
    cb(chart._id);
  });
}
function UpdateChart(chart, cb){
  var dbo = db.db("chartdb");
  console.log('chart to upsert: ' + JSON.stringify(chart));
  dbo.collection("charts").updateOne({"_id":new ObjectID(chart._id)}, { $set: {size: chart.size, class: chart.class, height: chart.height, width: chart.width} }, function(err, res) {
    if (err) throw err;
    console.log("chart updated " + res);
    cb(res);
  });
}
function InsertData(cb, data, id){
  console.log('data ' + JSON.stringify(data));
  console.log('id ' + id);
  var dbo = db.db("chartdb");
  data.chartId = id;
  console.log('data id! ' + data._id)
  dbo.collection("charts").insertOne(data, function(err, res) {
    if (err) throw err;
    console.log("data inserted " + data._id);
    cb(data._id);
  });
}
function DisableChart(id){
  var dbo = db.db("chartdb");
  console.log('disabling ' + id);
  dbo.collection("charts").updateOne({"_id": new ObjectID(id)}, {$set: {"is_active":0.0}},{upsert:true},
  
  function (err, res){
    if (err) throw err;
    console.log('disabled chart ' + id);
  });
}



http.listen(3002, function(){
  setInterval(Chunker, 1000);
  console.log('listening on *:3002');
});
  