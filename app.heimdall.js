var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

/*
io.on('connection', function(socket){
  console.log('connection called');
    socket.on('chat message', function(msg){
      io.emit('chat message', msg);
    });
  });
*/

io.on('connection', (client) => {
  client.on('subscribeToTimer', (interval) => {
    console.log('client is subscribing to timer with interval ', interval);
    setInterval(() => {
      client.emit('timer', new Date(), [
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
  ]   );
    }, interval);
  });
});

http.listen(3002, function(){
  console.log('listening on *:3002');
});
