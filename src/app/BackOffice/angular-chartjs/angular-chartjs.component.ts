import { Component } from '@angular/core';
import Chart from 'chart.js/auto';
import { StatsService } from '../../Services/stats.service';

@Component({
  selector: 'app-angular-chartjs',
  templateUrl: './angular-chartjs.component.html',
  styleUrls: ['./angular-chartjs.component.css']
})
export class AngularChartjsComponent {

  constructor(private statsservice: StatsService) { }
  public chart: any;
  ids: any[] = [];
  data_values: any[] = [];

  fetch() {
    this.statsservice.getstats().subscribe(
      (data: any[]) => {
        console.log(data);
        this.ids = Object.keys(data);
        this.data_values = Object.values(data);

        // Update the chart data after fetching
        this.chart.data.labels = this.ids; // Update chart labels with fetched IDs
        this.chart.data.datasets[0].data = this.data_values;
        
        this.chart.update();

        console.log("IDs:", this.ids);
        console.log("Values:", this.data_values);
      },
      error => {
        console.error('Error fetching locals:', error);
      }
    );
  }

  ngOnInit(): void {
    this.createChart();
    this.fetch();
  }

  createChart() {
    this.chart = new Chart("MyChart", {
      type: 'bar',
      data: {
        labels: [], // Leave it empty initially
        datasets: [
          {
            label: "Groups",
            data: this.data_values,
            backgroundColor: 'red'
          },
        ]
      },
      options: {
        aspectRatio: 2.5,
        scales: {
          x: {
            display: true,
            title: {
              display: true,
              text: 'Classroom'
            }
          },
          y: {
            display: true,
            title: {
              display: true,
              text: 'Number of groups'
            }
          }
        }
      }
    });
  }


  // Pie
  public pieChartLabels: string[] = ['Chrome', 'Safari', 'Firefox', 'Internet Explorer', 'Other'];
  public pieChartData: number[] = [40, 20, 20, 10, 10];
  public pieChartType: string = 'pie';

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

}



