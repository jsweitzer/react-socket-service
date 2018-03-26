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
    chart.chart = JSON.parse(JSON.stringify(templates.LineChart.chart));
  }else if (type === 'stepLine'){
    data = JSON.parse(JSON.stringify(templates.StepLineChartData));
    chart.chart = JSON.parse(JSON.stringify(templates.StepLineChart.chart));
  }else if (type === 'area'){
    data = JSON.parse(JSON.stringify(templates.AreaChartData));
    chart.chart = JSON.parse(JSON.stringify(templates.AreaChart.chart));
  }else if (type === 'spline'){
    data = JSON.parse(JSON.stringify(templates.SplineChartData));
    chart.chart = JSON.parse(JSON.stringify(templates.SplineChart.chart));
  }else if (type === 'stepArea'){
    data = JSON.parse(JSON.stringify(templates.StepAreaChartData));
    chart.chart = JSON.parse(JSON.stringify(templates.StepAreaChart.chart));  
  }else if (type === 'splineArea'){
    data = JSON.parse(JSON.stringify(templates.SplineAreaChartData));
    chart.chart = JSON.parse(JSON.stringify(templates.SplineAreaChart.chart));  
  }else if (type === 'Pie'){
    data = JSON.parse(JSON.stringify(templates.PieChartData));
    chart.chart = JSON.parse(JSON.stringify(templates.PieChart.chart));  
  }else{
    data = JSON.parse(JSON.stringify(templates.BarChartData));
    chart.chart = JSON.parse(JSON.stringify(templates.BarChart.chart));
  }
  
  chart.is_active = chart.chart.is_active;
  console.log('CHART' + JSON.stringify(chart))
  //chart._id = new ObjectID();
  chart.data = data;
  console.log('DATA'+JSON.stringify(data[0]));
  
  InsertChart(function(id){
    console.log('in insert chart');
    InsertData(function(id){console.log('in insert data');}, chart.data, id);

  }, chart);
}
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
      setInterval(() => {
        GetData(id, function(data)
        {
          /*
          data.data[0].dataPoints=data.data[0].dataPoints.map(function(val){
            val.y = 600*Math.random();
            return val;
          });
          */
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
  });

function GetCharts(id, cb){
  var dbo = db.db("chartdb");
  dbo.collection("charts").find({"is_active": 1}).toArray(function(err, res){
      cb(res);
  });
}
function GetData(id, cb){
  var dbo = db.db("chartdb");
  var o_id = new ObjectID(id);
  var charts = dbo.collection("chartdata").find({ "chartId": o_id});
    charts.forEach(function(c){
      cb(c);
  });
}
function InsertChart(cb, chart){
  var dbo = db.db("chartdb");
  dbo.collection("charts").insertOne(chart, function(err, res) {
    if (err) throw err;
    console.log("chart inserted " + chart._id);
    cb(chart._id);
  });
}
function InsertData(cb, data, id){
  console.log('data ' + JSON.stringify(data));
  console.log('id ' + id);
  var dbo = db.db("chartdb");
  data.chartId = id;
  console.log('data id! ' + data._id)
  dbo.collection("chartdata").insertOne(data, function(err, res) {
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
  console.log('listening on *:3002');
});
  