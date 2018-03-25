var app = require('express')();
var crypto = require('crypto');
var http = require('http').Server(app);
var io = require('socket.io')(http);
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
//insert hard coded chart and data
/*
MongoClient.connect(url, function(err, db){
  if(err) throw err;
  var dbo= db.db("chartdb");
  var chart = 
  {
    guid: guid,
    chart: {
      title:{
          text:"Test Mongo Insert"
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
  var dataPoints = 
  {
    chartGuid: guid,
    data:
    [
      {
        type:'bar',
        dataPoints:
        [
          {
            "y": 1,
            "label": "Sweden",
            "x": 0
          },
          {
            "y": 6,
            "label": "Taiwan",
            "x": 1
          },
          {
            "y": 7,
            "label": "Russia",
            "x": 2
          },
          {
            "y": 8,
            "label": "Spain",
            "x": 3
          },
          {
            "y": 8,
            "label": "Brazil",
            "x": 4
          },
          {
            "y": 8,
            "label": "India",
            "x": 5
          },
          {
            "y": 9,
            "label": "Italy",
            "x": 6
          },
          {
            "y": 9,
            "label": "Australia",
            "x": 7
          },
          {
            "y": 12,
            "label": "Canada",
            "x": 8
          },
          {
            "y": 13,
            "label": "South Korea",
            "x": 9
          },
          {
            "y": 13,
            "label": "Netherlands",
            "x": 10
          },
          {
            "y": 15,
            "label": "asdfasdf",
            "x": 11
          },
          {
            "y": 28,
            "label": "butt",
            "x": 12
          },
          {
            "y": 32,
            "label": "Germany",
            "x": 13
          },
          {
            "y": 32,
            "label": "France",
            "x": 14
          },
          {
            "y": 68,
            "label": "Japan",
            "x": 15
          },
          {
            "y": 73,
            "label": "fad",
            "x": 16
          },
          {
            "y": 132,
            "label": "US",
            "x": 17
          }
        ]
      }
    ]
  };

  dbo.collection("charts").insertOne(chart, function(err, res) {
    if (err) throw err;
    console.log("chart inserted");
    db.close();
  });

  dbo.collection("chartdata").insertOne(dataPoints, function(err, res) {
    if (err) throw err;
    console.log("data points inserted");
    db.close();
  });

});
*/



app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

app.get('/charts', function(req, res){
  res.send()
});

io.on('connection', (client) => {
  client.on('subscribeToTimer', (interval) => {
    console.log('client is subscribing to timer with interval ', interval);
    setInterval(() => {
      client.emit('timer', new Date()
    );
    },
    interval);
  });
  client.on('subscribeToData', (interval) => { 
      console.log('client subscribed to data');
      setInterval(() => {
        GetData(function(data)
        {
          console.log('get data cb called');
          data.data[0].dataPoints[0].y = 140*Math.random();
          client.emit('data', data);
        })
      }, interval);
    });
    client.on('subscribeToCharts', () => {
      GetCharts(function(data){
        console.log('get charts db called');
        client.emit('charts', data);
      });
    });
  });

function GetCharts(cb){
  MongoClient.connect(url, function(err, db){
    if(err) throw err;
    var dbo = db.db("chartdb");
    var charts = dbo.collection("charts").find();
    var result = [];
    charts.forEach(function(c){
      result.push(c);
    },function(c){cb(result);});
  });
}
function GetData(cb){
  MongoClient.connect(url, function(err, db){
    if(err) throw err;
    var dbo = db.db("chartdb");
    var charts = dbo.collection("chartdata").find();
    charts.forEach(function(c){
      console.log(c);
      cb(c);
    });
  });
}

http.listen(3002, function(){
  console.log('listening on *:3002');
});
