var ArcApp = {};
(function () {
    // number of dataPoints visible at any point
    var dataLength = 20;
    var chartArr = [];
    var chartHub;
    var config = {
        'htmlPath': '../Html'
    };
    /*
     *Begin Public Functions 
     */
    ArcApp.DisableChart = function disableChart(guid) {
        var data = {};
        data.guid = guid;
        $.ajax({
            type: "POST",
            url: '/chart/disablechart',
            data: data,
            success: function (res) {
                console.log('success!');
            }
        });
        for (var i = 0; i < chartArr.length; i++) {
            if (chartArr[i].guid == guid) {
                chartArr.splice(i, 1);
            }
            continue;
        }
        $('#' + guid + 'wrapper').remove();
    }
    ArcApp.ShowChartOpts = function showChartOpts(guid) {
        var val = getChartByGuid(guid);
        $('#NewChartModal').modal();
        $('#hdnGuid').val(val.id);
        $('#queryInpt').val("select ABS(Checksum(NewID()) % 10)");
        $('#titleInpt').val(val.options.title.text);
        $('#typeInpt').val(val.options.data[0].type);
        $('#periodInpt').val(val.period);
        $('#dataSizeInpt').val(val.dataSize);
        $('#rankInpt').val(val.rank);
        $('#hdnSize').val(val.size);
    }
    ArcApp.SmallSelected = function smallSelected(guid) {
        $('#' + guid).attr('class', 'arcChart arcSmall');
        $('#' + guid + 'wrapper').attr('class', 'col col-lg-4 col-md-4 col-sm-4 card arcChartWrapper arcSmall');
    }
    ArcApp.MediumSelected = function mediumSelected(guid) {
        $('#' + guid).attr('class', 'arcChart arcMedium');
        $('#' + guid + 'wrapper').attr('class', 'col col-lg-6 col-md-6 col-sm-6 card arcChartWrapper arcMedium');
    }
    ArcApp.LargeSelected = function largeSelected(guid) {
        $('#' + guid).attr('class', 'arcChart arcLarge');
        $('#' + guid + 'wrapper').attr('class', 'col col-lg-12 col-md-12 col-sm-12 card arcChartWrapper arcLarge');
    }
    /*
     * End Public Functions
     */
    // push updates to all charts
    function updateCharts(dat) {
        for (var i = 0; i < dat.length; i++) {
            var cv = getChartByGuid(dat[i].guid);
            console.log(JSON.stringify(cv));
            if (cv) {
                var chart = cv.chart;
                chart.options.data[0].dataPoints.push({
                    x: new Date(Date.parse(dat[i].time)),
                    y: dat[i].value
                });
                console.log(Date.parse(dat[i].time));
                if (chart.options.data[0].dataPoints.length > cv.dataSize) {
                    chart.options.data[0].dataPoints.shift();
                }
                chart.render(chart.options);
            } else {
                // async callback function pushChart
                chartHub.server.getchart(dat[i].guid);
            }
        }
    }
    function getChartByGuid(guid) {
        for (var i = 0; i < chartArr.length; i++) {
            if (chartArr[i].Guid == Guid) return chartArr[i];
        }
    }
    function compare(a, b) {
        return $(b).attr('rank') - $(a).attr('rank');
    }
    function pushChart(hubChart) {
        $('#' + hubChart.guid).remove();

        opts = JSON.parse(hubChart.Json);    

        var baseWrapperClass = 'col col-lg-6 col-md-6 col-sm-6 card ';
        var chartClass = 'arcMedium ';

        if (hubChart.size == 'small') {
            chartClass = 'arcSmall ';
            baseWrapperClass = 'col col-lg-4 col-md-4 col-sm-4 card ';
        } else if (hubChart.size == 'large') {
            chartClass = 'arcLarge ';
            baseWrapperClass = 'col col-lg-12 col-md-12 col-sm-12 card ';
        }

        var previousElement = $('#topOfTheCharts')

        var currentCharts = $('.chartWrapper');

        currentCharts.sort(compare);

        for (var i = 0; i < currentCharts.length; i++) {

            if (hubChart.rank > $(currentCharts[i]).attr('rank')) {
                previousElement = currentCharts[i];
                break;
            }
        };

        var wrapperClass = baseWrapperClass + chartClass;
        var wrapper = $('<div />', { 'id': hubChart.Guid + 'wrapper', 'class': wrapperClass + 'chartWrapper', 'rank': hubChart.rank });
        var icons = $('<div />', { 'style': 'width:100%' });
        var iconDel = $('<i />', { 'class': 'fas fa-times fa-xs', 'style': 'display:inline-block;float:right;margin-left:1em;margin-top:2px;hubChartsor:pointer;', 'onClick': "ArcApp.DisableChart('" + hubChart.guid + "')" });
        var iconOpts = $('<i />', { 'class': 'fas fa-cog fa-xs', 'style': 'display:inline-block;float:right;margin-top:2px;hubChartsor:pointer;', 'onClick': "ArcApp.ShowChartOpts('" + hubChart.guid + "')" });
        icons.append(iconDel);
        icons.append(iconOpts);
        var elem = $('<div/>', { 'id': hubChart.Guid, 'class': chartClass });
        wrapper.append(icons);
        wrapper.append(elem);
        $(previousElement).after(wrapper);
        var canvasChart = new CanvasJS.Chart(hubChart.Guid, opts);

        canvasChart.render(opts);
        chartArr.push(hubChart);
    }
    $(document).ready(function () {
        // Chart Modal //
        $('#chartModal').load(config.htmlPath + '/ChartModal.html', function () {
            $('#btnSubmit').click(function () {
                var data = {};
                data.guid = $('#hdnGuid').val();
                data.title = $('#titleInpt').val();
                data.type = $('#typeInpt').val();
                data.query = $('#queryInpt').val();
                data.period = $('#periodInpt').val();
                data.dataSize = $('#dataSizeInpt').val();
                data.rank = $('#rankInpt').val();
                data.size = $('#hdnSize').val();
                $.ajax({
                    type: "POST",
                    url: '/create/postchart',
                    data: data,
                    success: function (res) {
                        $('#NewChartModal').modal('hide');
                    }
                });
            });

            $('#btnSelectSmall').click(function () {
                var guid = $('#hdnGuid').val();
                $('#hdnSize').val("small");
                if (guid) ArcApp.SmallSelected(guid);
            });

            $('#btnSelectMedium').click(function () {
                var guid = $('#hdnGuid').val();
                $('#hdnSize').val("medium");
                if (guid) ArcApp.MediumSelected(guid);
            });

            $('#btnSelectLarge').click(function () {
                var guid = $('#hdnGuid').val();
                $('#hdnSize').val("large");
                if (guid) ArcApp.LargeSelected(guid);
            });

            $('#NewChartModal').on('hidden.bs.modal', function () {
                $('#hdnGuid').val("");
                $('#titleInpt').val("");
                $('#typeInpt').val("");
                $('#queryInpt').val("");
                $('#periodInpt').val("");
                $('#dataSizeInpt').val("");
                $('#rankInpt').val("");
                $('#hdnSize').val("");
            });
        });

        // Login Modal //
        $('#loginModal').load(config.htmlPath + '/LoginModal.html');

        // NavBar Modal //
        $('#navBar').load(config.htmlPath + '/Navbar.html', function () {
            $('#clearCache').click(function () {
                $.ajax({
                    type: "POST",
                    url: '/chart/clearcache',
                    data: {},
                    success: function (res) {
                        console.log('Cache Cleared');
                    }
                });
            });
        });
        var chart = new CanvasJS.Chart("testChart",
            {
                zoomEnabled: true,
                title: {
                    text: "Multi-Series Line Chart"
                },
                data: [
                    {
                        type: "line",
                        dataPoints: [
                            { x: 10, y: 21 },
                            { x: 20, y: 25 },
                            { x: 30, y: 20 },
                            { x: 40, y: 25 },
                            { x: 50, y: 27 },
                            { x: 60, y: 28 },
                            { x: 70, y: 28 },
                            { x: 80, y: 24 },
                            { x: 90, y: 26 }

                        ]
                    },
                    {
                        type: "line",
                        dataPoints: [
                            { x: 10, y: 31 },
                            { x: 20, y: 35 },
                            { x: 30, y: 30 },
                            { x: 40, y: 35 },
                            { x: 50, y: 35 },
                            { x: 60, y: 38 },
                            { x: 70, y: 38 },
                            { x: 80, y: 34 },
                            { x: 90, y: 44 }

                        ]
                    },
                    {
                        type: "line",
                        dataPoints: [
                            { x: 10, y: 45 },
                            { x: 20, y: 50 },
                            { x: 30, y: 40 },
                            { x: 40, y: 45 },
                            { x: 50, y: 45 },
                            { x: 60, y: 48 },
                            { x: 70, y: 43 },
                            { x: 80, y: 41 },
                            { x: 90, y: 28 }

                        ]
                    },
                    {
                        type: "line",
                        dataPoints: [
                            { x: 10, y: 71 },
                            { x: 20, y: 55 },
                            { x: 30, y: 50 },
                            { x: 40, y: 65 },
                            { x: 50, y: 95 },
                            { x: 60, y: 68 },
                            { x: 70, y: 28 },
                            { x: 80, y: 34 },
                            { x: 90, y: 14 }

                        ]
                    }
                ]
            });
        var chart2 = new CanvasJS.Chart("testChart2",
            {
                title: {
                    text: "Top Oil Reserves"
                },
                axisY: {
                    title: "Reserves(MMbbl)"
                },
                legend: {
                    verticalAlign: "bottom",
                    horizontalAlign: "center"
                },
                data: [

                    {
                        color: "#B0D0B0",
                        type: "scatter",
                        showInLegend: true,
                        legendMarkerType: "none",
                        legendText: "MMbbl = one million barrels",
                        dataPoints: [
                            { x: 1, y: 297571, label: "Venezuela" },
                            { x: 2, y: 267017, label: "Saudi" },
                            { x: 3, y: 175200, label: "Canada" },
                            { x: 4, y: 154580, label: "Iran" },
                            { x: 5, y: 116000, label: "Russia" },
                            { x: 6, y: 97800, label: "UAE" },
                            { x: 7, y: 20682, label: "US" },
                            { x: 8, y: 20350, label: "China" }
                        ]
                    }
                ]
            });

        chart2.render();
        chart.render();
    })
})();
