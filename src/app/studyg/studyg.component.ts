import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudygService } from '../services/studyg.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-studyg',
  templateUrl: './studyg.component.html',
  styleUrls: ['./studyg.component.css']
})
export class StudygComponent implements OnInit {
  topic:any;
  constructor(
    private service : StudygService,
    private router : Router,
    private toastr: ToastrService
  ) { }
  fournisseurs:any={}
textBus = '';

ngOnInit(): void {




  this.service.getSession().subscribe(
    data => this.fournisseurs=data
  )

}
deleteSession(id:any){
  this.service.deleteSession(id).subscribe(
    res=>{this.fournisseurs},
    error => console.log(error)
    )
    }

delete(i:any){
  this.fournisseurs.splice(i,1)
}

modify(id:any){
  this.router.navigate(['updatesg',id])
}


  Search(){
      if (this.topic ==''){
        this.ngOnInit();

      }else {
        this.fournisseurs =this.fournisseurs.filter ((res: { topic: string; }) => {
          return res.topic.toLocaleLowerCase().match(this.topic.toLocaleLowerCase());
        })
      }

     }

   
   
     function(){
      let btn:any = document.querySelector("#btn");
      let sidebar:any = document.querySelector(".sidebar");
      let searchBtn = document.querySelector(".bx-search");


      sidebar.classList.toggle("active");
      if(btn.classList.contains("bx-menu")) {
          btn.classList.replace("bx-menu", "bx-menu-alt-right");
      } else {
          btn.classList.replace("bx-menu-alt-right", "bx-menu");
      }
    }
    incrementNbp(id: number) {
      this.service.incrementNbpIfUnderFive(id).subscribe(
        (data) => {
          // Handle the response if needed
          console.log('Incremented nbp successfully', data);
        },
        (error) => {
          // Handle error if necessary
          console.error('Error while incrementing nbp', error);

                this.toastr.error('Unable to increment nbp. Maximum participants reached.');

        }
      );
    }
}


