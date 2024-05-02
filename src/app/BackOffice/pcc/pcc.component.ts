import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
import { StatsService } from '../../Services/stats.service';

@Component({
  selector: 'app-pcc',
  templateUrl: './pcc.component.html',
  styleUrls: ['./pcc.component.css']
})
export class PccComponent implements OnInit {

  constructor(private statsservice: StatsService) { }
  public chart: any;
  data: any;

  ngOnInit(): void {
    this.fetch();
  }

  fetch() {
    this.statsservice.getstatsAvliablesLocals().subscribe(
      (data: any) => {
        console.log(data);
        this.data = data;
        this.createChart(); // Move createChart() call here
      },
      error => {
        console.error('Error fetching data:', error);
      }
    );
  }

  createChart() {
    this.chart = new Chart("MyChart", {
      type: 'pie',
      data: {
        labels: Object.keys(this.data),
        datasets: [{
          label: 'Availability',
          data: Object.values(this.data),
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)'
          ],
          hoverOffset: 4
        }]
      },
      options: {
        aspectRatio: 1,
        plugins: {
          legend: {
            position: 'right'
          }
        }
      }
    });
  }

  updateChart() {
    if (this.chart) {
      this.chart.data.labels = Object.keys(this.data);
      this.chart.data.datasets[0].data = Object.values(this.data);
      this.chart.update();
    }
  }
}
