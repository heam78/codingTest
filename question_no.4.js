var ctx = document.getElementById("myChart");
const config = {
  type: "line",
  data: {
    labels: [
      //x축
      "1월",
      "2월",
      "3월",
      "4월",
      "5월",
      "6월",
      "7월",
      "8월",
      "9월",
      "10월",
      "11월",
      "12월",
    ],
    datasets: [
      {
        label: "평균기온",
        yAxisID: "A",
        data: [5, 15, 20, 30, 25, 20, 29, 37, 28, 20, 15, 20],
        fill: false,
        backgroundColor: "rgba(75, 192, 192, 1)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 2.5,
        lineTension: 0.5,
      },
      {
        label: "평균습도",
        yAxisID: "B",
        data: [30, 45, 42, 55, 94, 70, 58, 63, 87, 50, 88, 80],
        fill: false,
        backgroundColor: "rgba(255, 99, 132, 1)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 2.5,
        lineTension: 0.5,
      },
    ],
  },
  options: {
    scales: {
      yAxes: [
        {
          id: "A",
          type: "linear",
          position: "left",
          ticks: {
            stepSize: 10,
            min: 0,
            max: 40,
          },
          text: "평균기온(°C)",
        },
        {
          id: "B",
          type: "linear",
          position: "right",
          ticks: {
            stepSize: 20,
            min: 20,
            max: 100,
          },
          text: "평균온도(%)",
        },
      ],
    },
  },
};
//차트그리기
var myChart = new Chart(ctx, config);
//데이터 변경
document.getElementById("random").onclick = function () {
  var dataset = config.data.datasets;
  for (var i = 0; i < dataset.length; i++) {
    // console.log(dataset);
    var data = dataset[i].data;
    for (var j = 0; j < data.length; j++) {
      data[j] = Math.floor(Math.random() * 50);
    }
  }

  myChart.update();
};

//데이터 적용
document.getElementById("reData").onclick = function () {
  var dataset = config.data.datasets;
  for (var i = 0; i < dataset.length; i++) {
    // console.log(dataset);

    var data = dataset[i].data;
    for (var j = 0; j < data.length; j++) {
      var id = String(i + 1) + String(j + 1);
      console.log(id);
      data[j] = document.getElementById(id).value;
    }
  }

  myChart.update();
};
