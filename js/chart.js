$(document).ready(function() {
    // Data for the pie chart

   let  datavalues = JSON.parse(localStorage.getItem("chart"));
   let  total = JSON.parse(localStorage.getItem("total"));
   document.getElementById('te').textContent = total;
    var data = {
        labels: ['Health', 'Daily Essentials', 'Utility Bills', 'Clothing','Other'],
        datasets: [{
            data: [datavalues.health,datavalues.daily_Essentials,datavalues.utility_Bills,datavalues.clothing,datavalues.other],
            backgroundColor: ['red', 'blue', 'yellow', 'green','orange']
        }]
    };

    // Pie chart configuration
    var options = {
        responsive: false,
        maintainAspectRatio: false,
    };

    // Create pie chart
    var ctx = document.getElementById('pieChart').getContext('2d');
    var pieChart = new Chart(ctx, {
        type: 'pie',
        data: data,
        options: options
    });
});


document.addEventListener('DOMContentLoaded', function(){
    eventListeners();
  })