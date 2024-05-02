import { Component } from '@angular/core';
import { ManageStudyGroupService } from '../../Services/manage-study-group.service';

@Component({
  selector: 'app-add-study-group',
  templateUrl: './add-study-group.component.html',
  styleUrl: './add-study-group.component.css'
})
export class AddStudyGroupComponent {

  constructor(private dataService: ManageStudyGroupService) { }

  formData: any = {};

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
