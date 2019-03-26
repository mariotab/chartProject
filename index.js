var app = new Vue({
  el: '#app',
  data: {
    status: "",
    history: { "history":[
{"type":"h", "time":"15:30", "cycles":"8"},
{"type":"h", "time":"15:00", "cycles":"4"},
{"type":"h", "time":"14:30", "cycles":"2"},
{"type":"h", "time":"14:00", "cycles":"9"},
{"type":"h", "time":"13:30", "cycles":"1"},
{"type":"h", "time":"13:00", "cycles":"8"},
{"type":"h", "time":"12:30", "cycles":"9"},
{"type":"h", "time":"12:00", "cycles":"3"},
{"type":"h", "time":"11:30", "cycles":"2"},
{"type":"h", "time":"01:00", "cycles":"5"},
{"type":"h", "time":"12:00", "cycles":"3"},
{"type":"h", "time":"11:30", "cycles":"2"},
{"type":"h", "time":"01:00", "cycles":"5"}]},
    LOGs:"",
    api: "http://192.168.168.71/"
  },
   mounted() {
    var self = this;
    $.getJSON(self.api+"status", function(data) {
      self.status = data;
    });
    $.get(self.api+"history", function(data) {
      self.history = data;
    });
    $.get(self.api+"LOG", function(data) {
      self.LOGs = data;
    });
    

    //start add chart 26.03
    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: 'Value',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255, 99, 132, 1)',
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
                    beginAtZero: true
                }
            }]
        }
    }
});

for (var i = 0; i <= self.history.history.length-1; i++) {
  myChart.data.labels[i] = self.history.history[i].time,
  myChart.data.datasets[0].data[i] = self.history.history[i].cycles
};
 //end add chart 26.03

  },
  methods:{
  toggleLight (){
  var self = this;
  if (self.status.lightPin) {fetch (self.api+"?action=2"); }
  else {fetch (self.api+"?action=1");}
  },
  togglePump (){
  var self = this;
  if (self.status.pumpPin) {fetch (self.api+"?action=5"); }
  else {fetch (self.api+"?action=6");}
  }

  }

})

