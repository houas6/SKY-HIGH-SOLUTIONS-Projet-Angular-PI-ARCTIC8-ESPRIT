import { Component, ElementRef, ViewChild } from '@angular/core';
import { ManageLocalService } from '../../Services/manage-local.service';
import { NotificationServiceService } from '../../Services/notification-service.service';

@Component({
  selector: 'app-add-local-2',
  templateUrl: './add-local-2.component.html',
  styleUrls: ['./add-local-2.component.css'] // Corrected styleUrl to styleUrls
})
export class AddLocal2Component {
  constructor(private dataService: ManageLocalService, private notificationService: NotificationServiceService) { }

  @ViewChild('closeButton') closeButton: ElementRef | undefined;
  formData: any = {
    availability: false
  };
  names: string[] = [];

  onSubmit() {
    if (this.formData.name && this.formData.bloc && this.formData.capacity) {
      this.fetch_names(); // Call the function to fetch names
    } else {
      console.error('Required fields are missing. Form not submitted.');
      // Optionally, you can provide feedback to the user about missing fields
    }
  }

  fetch_names(): void {
    console.log("fetch names called");
    this.dataService.getallnames().subscribe(
      (data: any) => {
        console.log(data);
        this.names = data;
        // Check if the formData.name exists in the names array
        if (this.names.includes(this.formData.name)) {
          console.log(`${this.formData.name} exists in the list.`);
          this.notificationService.showError('exists in the list');
        } else {
          console.log(`${this.formData.name} does not exist in the list.`);
          console.log('Form Data:', this.formData);
          this.dataService.sendData(this.formData).subscribe(
            response => {
              console.log('Data sent successfully:', response);
              // After successful form submission, show a success notification
              this.notificationService.showSuccess('Data sent successfully');
              setTimeout(() => {
                if (this.closeButton) {
                  this.closeButton.nativeElement.click();
                }; // Close the modal without using jQuery
              }, 3000); // 5000 milliseconds = 5 seconds
            },
            error => {
              console.error('Error sending data:', error);
            }
          );
        }
      },
      error => {
        console.error('Error fetching names:', error);
      }
    );
  }
}
