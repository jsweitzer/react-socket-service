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
MongoClient.connect(url, function(err, con){
  db = con;
  var data = templates.BarChartData;
  var chart = {};
  chart.chart = templates.BarChart.chart;
  console.log('CHART' + JSON.stringify(chart))
  chart._id = new ObjectID();
  chart.data = data;
  console.log(JSON.stringify(chart));
  chart.chartId = chart._id;
  chart.data.chartId = chart._id;
  
  InsertChart(function(id){
    console.log('in insert chart');
    chart.data.chartId = id;
    InsertData(function(id){console.log('in insert data');}, chart.data, id);

  }, chart);});

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
          data.data[0].dataPoints[0].y = 140*Math.random();
          socket.emit('data', data);
        })
      }, interval);
    });
    socket.on('subscribeToCharts', (id) => {
      GetCharts(id, function(data){
        socket.emit('charts', data);
      });
    });
  });

function GetCharts(id, cb){
  var dbo = db.db("chartdb");
  dbo.collection("charts").find().toArray(function(err, res){
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
  var dbo = db.db("chartdb");
  data.chartId = id;
  dbo.collection("chartdata").insertOne(data, function(err, res) {
    if (err) throw err;
    console.log("data inserted " + data._id);
    cb(data._id);
  });
}



http.listen(3002, function(){
  console.log('listening on *:3002');
});






  /*
  var chart = 
  {
    chart: {
      zoomEnabled: true,
      zoomType: "xy",
      title:{
          text:"Test Zoom"
      },
      animationEnabled: true,
      data: 
      [
        {     
            type: "bar",
            dataPoints: []
        }
      ]
    }
  };
  */

  /*
    dbo.collection("charts").insertOne(chart, function(err, res) {
      if (err) throw err;
      console.log("chart inserted");
      db.close();
    });
  */
  /*
    dbo.collection("chartdata").insertOne(dataPoints, function(err, res) {
      if (err) throw err;
      console.log("data points inserted");
      db.close();
    });
    */
  