import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';


@Injectable({
  providedIn: 'root'
})
export class NotificationServiceService {

  constructor(private toastr : ToastrService){}

  showSuccess(msg: any) {
    console.log("Show sucesss");
    this.toastr.success(msg);
  }
  showError(msg: string) {
    this.toastr.error(msg, 'Error');
  }
  showWarnning() {
    this.toastr.warning('this is a warning toast', 'Warnning');
  }
  showInfo() {
    this.toastr.info('this is a info toast', 'Info');
  }
  show() {
    this.toastr.show('this a toast', 'Show');
  }
}