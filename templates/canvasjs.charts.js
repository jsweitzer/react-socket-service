var ObjectID = require('mongodb').ObjectID;

exports.BarChart = 
{
  
  chart: {
      is_active: 1.0,
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
exports.LineChart = 
  {
    chart:{
      is_active: 1.0,
      zoomEnabled: true,
      zoomType: "xy",
      title:{
          text:"Line"
      },
      animationEnabled: true,
      data: 
      [
        {     
            type: "line",
            dataPoints:      [
            { "x": 1, "y": 450 },
            { "x": 2, "y": 414 },
            { "x": 3, "y": 520 },
            { "x": 4, "y": 460 },
            { "x": 5, "y": 450 },
            { "x": 6, "y": 500 },
            { "x": 7, "y": 480 },
            { "x": 8, "y": 480 },
            { "x": 9, "y": 410 },
            { "x": 10, "y": 500 },
            { "x": 11, "y": 480 },
            { "x": 12, "y": 510 }]
        }
      ]
  }
}
exports.LineChartData = 
    {
      chartId: new ObjectID('5ab7d1c0688ecda5a8faf63d'),
      type: "line",
      data:[

        {
          type: 'line',
        dataPoints: [    
          { "x": 1, "y": 450 },
          { "x": 2, "y": 414 },
          { "x": 3, "y": 520 },
          { "x": 4, "y": 460 },
          { "x": 5, "y": 450 },
          { "x": 6, "y": 500 },
          { "x": 7, "y": 480 },
          { "x": 8, "y": 480 },
          { "x": 9, "y": 410 },
          { "x": 10, "y": 500 },
          { "x": 11, "y": 480 },
          { "x": 12, "y": 510 }]
        }
    ]
  };
  exports.StepLineChart = 
  {
    chart:{
      is_active: 1.0,
      zoomEnabled: true,
      zoomType: "xy",
      title:{
          text:"StepLine"
      },
      animationEnabled: true,
      data: 
      [
        {     
            type: "stepLine",
            dataPoints:      [
            { "x": 1, "y": 450 },
            { "x": 2, "y": 414 },
            { "x": 3, "y": 520 },
            { "x": 4, "y": 460 },
            { "x": 5, "y": 450 },
            { "x": 6, "y": 500 },
            { "x": 7, "y": 480 },
            { "x": 8, "y": 480 },
            { "x": 9, "y": 410 },
            { "x": 10, "y": 500 },
            { "x": 11, "y": 480 },
            { "x": 12, "y": 510 }]
        }
      ]
  }
  
}
exports.StepLineChartData = 
    {
      chartId: new ObjectID('5ab7d1c0688ecda5a8faf63d'),
      type: "stepLine",
      data:[

        {
          type: 'stepLine',
        dataPoints: [    
          { "x": 1, "y": 450 },
          { "x": 2, "y": 414 },
          { "x": 3, "y": 520 },
          { "x": 4, "y": 460 },
          { "x": 5, "y": 450 },
          { "x": 6, "y": 500 },
          { "x": 7, "y": 480 },
          { "x": 8, "y": 480 },
          { "x": 9, "y": 410 },
          { "x": 10, "y": 500 },
          { "x": 11, "y": 480 },
          { "x": 12, "y": 510 }]
        }
    ]
  };
exports.SplineChart = 
{
  chart:{
    is_active: 1.0,
    zoomEnabled: true,
    zoomType: "xy",
    title:{
        text:"Spline"
    },
    animationEnabled: true,
    data: 
    [
      {     
          type: "spline",
          dataPoints:      [
          { "x": 1, "y": 450 },
          { "x": 2, "y": 414 },
          { "x": 3, "y": 520 },
          { "x": 4, "y": 460 },
          { "x": 5, "y": 450 },
          { "x": 6, "y": 500 },
          { "x": 7, "y": 480 },
          { "x": 8, "y": 480 },
          { "x": 9, "y": 410 },
          { "x": 10, "y": 500 },
          { "x": 11, "y": 480 },
          { "x": 12, "y": 510 }]
      }
    ]
}

}
exports.SplineChartData = 
  {
    chartId: new ObjectID('5ab7d1c0688ecda5a8faf63d'),
    type: "spline",
    data:[
      {
        type: 'spline',
        dataPoints: [    
          { "x": 1, "y": 450 },
          { "x": 2, "y": 414 },
          { "x": 3, "y": 520 },
          { "x": 4, "y": 460 },
          { "x": 5, "y": 450 },
          { "x": 6, "y": 500 },
          { "x": 7, "y": 480 },
          { "x": 8, "y": 480 },
          { "x": 9, "y": 410 },
          { "x": 10, "y": 500 },
          { "x": 11, "y": 480 },
          { "x": 12, "y": 510 }
        ]
      }
  ]
};
exports.StepAreaChart = 
{
  chart:{
    is_active: 1.0,
    zoomEnabled: true,
    zoomType: "xy",
    title:{
        text:"StepArea"
    },
    animationEnabled: true,
    data: 
    [
      {     
          type: "stepArea",
          dataPoints:      [
          { "x": 1, "y": 450 },
          { "x": 2, "y": 414 },
          { "x": 3, "y": 520 },
          { "x": 4, "y": 460 },
          { "x": 5, "y": 450 },
          { "x": 6, "y": 500 },
          { "x": 7, "y": 480 },
          { "x": 8, "y": 480 },
          { "x": 9, "y": 410 },
          { "x": 10, "y": 500 },
          { "x": 11, "y": 480 },
          { "x": 12, "y": 510 }]
      }
    ]
}

}
exports.StepAreaChartData = 
  {
    chartId: new ObjectID('5ab7d1c0688ecda5a8faf63d'),
    type: "stepArea",
    data:[
      {
        type: 'stepArea',
        dataPoints: [    
          { "x": 1, "y": 450 },
          { "x": 2, "y": 414 },
          { "x": 3, "y": 520 },
          { "x": 4, "y": 460 },
          { "x": 5, "y": 450 },
          { "x": 6, "y": 500 },
          { "x": 7, "y": 480 },
          { "x": 8, "y": 480 },
          { "x": 9, "y": 410 },
          { "x": 10, "y": 500 },
          { "x": 11, "y": 480 },
          { "x": 12, "y": 510 }
        ]
      }
  ]
};
exports.AreaChart = 
{
  chart:{
    is_active: 1.0,
    zoomEnabled: true,
    zoomType: "xy",
    title:{
        text:"Area"
    },
    animationEnabled: true,
    data: 
    [
      {     
          type: "area",
          dataPoints:      [
          { "x": 1, "y": 450 },
          { "x": 2, "y": 414 },
          { "x": 3, "y": 520 },
          { "x": 4, "y": 460 },
          { "x": 5, "y": 450 },
          { "x": 6, "y": 500 },
          { "x": 7, "y": 480 },
          { "x": 8, "y": 480 },
          { "x": 9, "y": 410 },
          { "x": 10, "y": 500 },
          { "x": 11, "y": 480 },
          { "x": 12, "y": 510 }]
      }
    ]
}

}
exports.AreaChartData = 
  {
    chartId: new ObjectID('5ab7d1c0688ecda5a8faf63d'),
    type: "area",
    data:[
      {
        type: 'area',
        dataPoints: [    
          { "x": 1, "y": 450 },
          { "x": 2, "y": 414 },
          { "x": 3, "y": 520 },
          { "x": 4, "y": 460 },
          { "x": 5, "y": 450 },
          { "x": 6, "y": 500 },
          { "x": 7, "y": 480 },
          { "x": 8, "y": 480 },
          { "x": 9, "y": 410 },
          { "x": 10, "y": 500 },
          { "x": 11, "y": 480 },
          { "x": 12, "y": 510 }
        ]
      }
  ]
};
exports.SplineAreaChart = 
{
  chart:{
    is_active: 1.0,
    zoomEnabled: true,
    zoomType: "xy",
    title:{
        text:"SplineArea"
    },
    animationEnabled: true,
    data: 
    [
      {     
          type: "splineArea",
          dataPoints:      [
          { "x": 1, "y": 450 },
          { "x": 2, "y": 414 },
          { "x": 3, "y": 520 },
          { "x": 4, "y": 460 },
          { "x": 5, "y": 450 },
          { "x": 6, "y": 500 },
          { "x": 7, "y": 480 },
          { "x": 8, "y": 480 },
          { "x": 9, "y": 410 },
          { "x": 10, "y": 500 },
          { "x": 11, "y": 480 },
          { "x": 12, "y": 510 }]
      }
    ]
}

}
exports.SplineAreaChartData = 
  {
    chartId: new ObjectID('5ab7d1c0688ecda5a8faf63d'),
    type: "splineArea",
    data:[
      {
        type: 'splineArea',
        dataPoints: [    
          { "x": 1, "y": 450 },
          { "x": 2, "y": 414 },
          { "x": 3, "y": 520 },
          { "x": 4, "y": 460 },
          { "x": 5, "y": 450 },
          { "x": 6, "y": 500 },
          { "x": 7, "y": 480 },
          { "x": 8, "y": 480 },
          { "x": 9, "y": 410 },
          { "x": 10, "y": 500 },
          { "x": 11, "y": 480 },
          { "x": 12, "y": 510 }
        ]
      }
  ]
};
exports.PieChart = 
{
  chart:{
    is_active: 1.0,
    zoomEnabled: true,
    zoomType: "xy",
    title:{
        text:"Pie"
    },
    legend: {
			maxWidth: 350,
			itemWidth: 120
		},
    animationEnabled: true,
    data: 
    [
      {
        type: 'pie',
        dataPoints: [
          {
            type: "pie",
            showInLegend: true,
            legendText: "{indexLabel}",
            dataPoints: [
              { y: 4181563, indexLabel: "PlayStation 3" },
              { y: 2175498, indexLabel: "Wii" },
              { y: 3125844, indexLabel: "Xbox 360" },
              { y: 1176121, indexLabel: "Nintendo DS"},
              { y: 1727161, indexLabel: "PSP" },
              { y: 4303364, indexLabel: "Nintendo 3DS"},
              { y: 1717786, indexLabel: "PS Vita"}
            ]
          }
          ]
      }
  ]
}

}
exports.PieChartData = 
  {
    chartId: new ObjectID('5ab7d1c0688ecda5a8faf63d'),
    type: "pie",
    data:[
      {
        type: 'pie',
        dataPoints: [
          {
            type: "pie",
            showInLegend: true,
            legendText: "{indexLabel}",
            dataPoints: [
              { y: 4181563, indexLabel: "PlayStation 3" },
              { y: 2175498, indexLabel: "Wii" },
              { y: 3125844, indexLabel: "Xbox 360" },
              { y: 1176121, indexLabel: "Nintendo DS"},
              { y: 1727161, indexLabel: "PSP" },
              { y: 4303364, indexLabel: "Nintendo 3DS"},
              { y: 1717786, indexLabel: "PS Vita"}
            ]
          }
          ]
      }
  ]
};


