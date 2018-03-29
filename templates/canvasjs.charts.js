var ObjectID = require('mongodb').ObjectID;
exports.ColorSets = 
{
  Greens: [
    ""
  ]
}
exports.BarChart = 
{
  size: 'medium',
  class: 'col col-md-6 col-lg-6 col-sm-6 card',
  is_active: 1.0,
  width: 95,
  height: 400,
  options: {
      zoomEnabled: true,
      zoomType: "xy",
      title:{
          text:"Bar"
      },
      animationEnabled: true,
      data: 
      [
        {     
            type: "bar",
            dataPoints: [
              {
                "y": 1,
                "label": "Sweden",
                "x": 0,
                "color": "#594F4F"
              },
              {
                "y": 6,
                "label": "Taiwan",
                "x": 1,
                "color": "#547980"
              },
              {
                "y": 7,
                "label": "Russia",
                "x": 2,
                "color": "#45ADA8"
              },
              {
                "y": 8,
                "label": "Spain",
                "x": 3,
                "color": "#9DE0AD"
              },
              {
                "y": 8,
                "label": "Brazil",
                "x": 4,
                "color": "#E5FCC2"
              }
            ]
        }
      ]
    }
}
exports.LineChart = 
  {
    size: 'medium',
    class: 'col col-md-6 col-lg-6 col-sm-6 card',
    is_active: 1.0,
    width: 95,
    height: 400,
    options:{
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
            { "x": 5, "y": 450 }]
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
    size: 'medium',
    height: 400,
    width: 95,
    is_active: true,
    options:{
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
  size: 'medium',
  class: 'col col-md-6 col-lg-6 col-sm-6 card',
  is_active: 1.0,
  width: 95,
  height: 400,
  options:{
    size: 'medium',
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
  size: 'medium',
  class: 'col col-md-6 col-lg-6 col-sm-6 card',
  is_active: 1.0,
  width: 95,
  height: 400,
  options:{
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
  size: 'medium',
  class: 'col col-md-6 col-lg-6 col-sm-6 card',
  is_active: 1.0,
  width: 95,
  height: 400,
  options:{
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
  size: 'medium',
  class: 'col col-md-6 col-lg-6 col-sm-6 card',
  is_active: 1.0,
  width: 95,
  height: 400,
  options:{
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
  size: 'medium',
  class: 'col col-md-6 col-lg-6 col-sm-6 card',
  is_active: 1.0,
  width: 95,
  height: 400,
  options:{
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


