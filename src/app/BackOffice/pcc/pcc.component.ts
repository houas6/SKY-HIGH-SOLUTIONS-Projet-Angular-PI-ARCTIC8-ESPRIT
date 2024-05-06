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
        if (!this.chart) {
          this.createChart();
        } else {
          this.updateChart();
        }
      },
      error => {
        console.error('Error fetching data:', error);
      }
    );
  }

  createChart() {
    this.chart = new Chart("MyChartpie", {
      type: 'pie',
      data: {
        labels: Object.keys(this.data),
        datasets: [{
          label: 'Availability',
          data: Object.values(this.data),
          backgroundColor: [
            'rgb(128, 139, 150)',
            'rgb(240, 30, 0)'
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
