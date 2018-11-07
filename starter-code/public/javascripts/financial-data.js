const coinInfo  = axios.create({
  baseURL: 'http://api.coindesk.com/v1/bpi/historical/close.json',
});

coinInfo.get(). then(res => {
let labels = Object.keys(res.data.bpi);
let values = Object.values(res.data.bpi);
printTheChart(res.data,labels,values);

console.log(res.data.coinInfo)
 } )
  .catch(error => {
    console.log(error);
});

let printTheChart = (coinData, labels, values) => {

var ctx = document.getElementById("myChart").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: labels,
        datasets: [{
            label: "Bitcoins",
            data: values,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
})
}