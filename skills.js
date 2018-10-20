var htmlDoughnut = document.getElementById("html").getContext("2d");


var htmlData = [
  {
    value: 100,
    color:"#74cfae"
  },
  {
    value : 0,
    color : "#f2f2f2"
  }
];


var myHTMLdoughnut = new Chart(htmlDoughnut).Doughnut(htmlData, {
  percentageInnerCutout : 80
});
