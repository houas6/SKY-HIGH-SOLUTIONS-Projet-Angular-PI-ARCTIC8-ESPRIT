import { Component } from '@angular/core';
import { ManageLocalService } from '../../Services/manage-local.service';

@Component({
  selector: 'app-add-local-2',
  templateUrl: './add-local-2.component.html',
  styleUrl: './add-local-2.component.css'
})
export class AddLocal2Component {

  constructor(private dataService: ManageLocalService) { }

  formData: any = {
      availability: false 
  };
 
  onSubmit() {
    console.log('Form Data:', this.formData);
    this.dataService.sendData(this.formData)
      .subscribe(response => {
        console.log('Data sent successfully:', response);
        // Handle response as needed
      }, error => {
        console.error('Error sending data:', error);
        // Handle error as needed
      });
  }
  }
