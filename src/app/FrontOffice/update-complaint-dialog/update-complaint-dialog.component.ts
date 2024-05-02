import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-update-complaint-dialog',
  templateUrl: './update-complaint-dialog.component.html',
  styleUrls: ['./update-complaint-dialog.component.css']
})
export class UpdateComplaintDialogComponent {
  @Input() complaint: any;
  @Output() updateComplaint: EventEmitter<any> = new EventEmitter();
  @Output() closeDialog: EventEmitter<void> = new EventEmitter<void>();

  onUpdate() {
    this.updateComplaint.emit({ id: this.complaint.id, updatedComplaint: this.complaint });
  }

  onClose() {
    this.closeDialog.emit();
  }
}
