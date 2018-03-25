var ObjectID = require('mongodb').ObjectID;

exports.BarChart = 
{
    chart: {
        zoomEnabled: true,
        zoomType: "xy",
        title:{
            text:"Test Template2"
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
}
exports.BarChartData = 
  {
    chartId: new ObjectID('5ab7d1c0688ecda5a8faf63d'),
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
            "label": "set2",
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