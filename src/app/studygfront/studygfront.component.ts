import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudygService } from '../services/studyg.service';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-studygfront',
  templateUrl: './studygfront.component.html',
  styleUrls: ['./studygfront.component.css']
})
export class StudygfrontComponent implements OnInit {
  topic: any;
  fournisseurs: any = {};
  sortedByDate: boolean = false; // Variable pour suivre si les fournisseurs sont triés ou non
  currentPage: number = 1;
  itemsPerPage: number = 3; // Nombre d'éléments par page

  constructor(
    private service: StudygService,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.service.getSession().subscribe(
      data => {
        this.fournisseurs = data;


      }
    );
  }

  deleteSession(id: any) {
    this.service.deleteSession(id).subscribe(
      res => { this.fournisseurs; },
      error => console.log(error)
    );
  }

  delete(i: any) {
    this.fournisseurs.splice(i, 1);
  }

  modify(id: any) {
    this.router.navigate(['updatesg', id]);
  }

  Search() {
    if (this.topic == '') {
      this.ngOnInit();
    } else {
      this.fournisseurs = this.fournisseurs.filter((res: { topic: string; }) => {
        return res.topic.toLocaleLowerCase().match(this.topic.toLocaleLowerCase());
      });
    }
  }

  incrementNbp(id: number) {
    this.service.incrementNbpIfUnderFive(id).subscribe(
      (data) => {
        console.log('Incremented nbp successfully', data);
        this.toastr.success('thank you for your participation.');
      },
      (error) => {
        console.error('Error while incrementing nbp', error);
        this.toastr.error('Unable to participate. Maximum participants reached.');
      }
    );
  }

  sortByDate() {
    if (!this.sortedByDate) {
      this.fournisseurs.sort((a: any, b: any) => {
        return new Date(a.date_debut).getTime() - new Date(b.date_debut).getTime();
      });
      this.sortedByDate = true; // Marquez les fournisseurs comme triés
    }
  }







 // Fonction pour obtenir les fournisseurs de la page actuelle
 getCurrentPageFournisseurs() {
  const startIndex = (this.currentPage - 1) * this.itemsPerPage;
  const endIndex = startIndex + this.itemsPerPage;
  return this.fournisseurs.slice(startIndex, endIndex);
}

// Fonction pour aller à la page précédente
goToPreviousPage() {
  if (this.currentPage > 1) {
    this.currentPage--;
  }
}

// Fonction pour aller à la page suivante
goToNextPage() {
  const maxPage = Math.ceil(this.fournisseurs.length / this.itemsPerPage);
  if (this.currentPage < maxPage) {
    this.currentPage++;
  }
}







}
