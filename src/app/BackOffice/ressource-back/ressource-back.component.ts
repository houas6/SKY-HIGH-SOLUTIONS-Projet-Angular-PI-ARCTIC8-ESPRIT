import { Component, OnInit, Type } from '@angular/core';
import { Ressource } from '../../FrontOffice/Ressource';
import { RessourceService } from '../../Services/ressource.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-ressource-back',
  templateUrl: './ressource-back.component.html',
  styleUrl: './ressource-back.component.css'
})
export class RessourceBackComponent  implements OnInit{

  ressourceForm: FormGroup;
  Types:string[]= ['cours','résumé','examens','tps'];
  ressources: Ressource[] = [];
  editressource: Ressource | null = null;

  constructor( private formBuilder: FormBuilder,private RessourceService: RessourceService){

    this.ressourceForm = this.formBuilder.group({
      idRessources: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      Date_ajout: ['', [Validators.required, Validators.pattern('^(?:19|20)[0-9]{2}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-9])|(?:0[13-9]|1[0-2])-(?:30)|(?:0[13578]|1[02])-31)$')]],
      Description: ['', [Validators.required]],
      Type: ['', Validators.required],
      content: ['', [Validators.required]],
      
      
    });
  }

  ngOnInit() {
    this.RessourceService.getRessource().subscribe(
      (data) => {
        this.ressources = data;
        console.log(this.ressources);

      },
      (error) => {
        console.error('Error fetching ressources', error);
      }
    );
  }
  addressource() {
    const newRessource: Ressource = {
      Date_ajout: this.ressourceForm.value.Date_ajout,
      Description: this.ressourceForm.value.Description,
      Type: this.ressourceForm.value.Type,
      content: this.ressourceForm.value.content
      // Don't include idRessources here
    };
  
    console.log("New Resource:", newRessource); // Log newRessource to check its values
  
    this.RessourceService.addRessource(newRessource).subscribe(
      (data) => {
        console.log("Response:", data); // Log the response to see if it contains any errors
        this.ressources.push(data);
        this.ressourceForm.reset();
      },
      (error) => {
        console.error('Error adding ressource', error);
      }
    );
  }
  
  

  upressource(): void {
    if (this.editressource && this.ressourceForm.valid) {
      const upressource: Ressource = {...this.editressource, ...this.ressourceForm.value} as Ressource;
      this.RessourceService.updateRessource(upressource).subscribe(() => {
        this.ressourceForm.reset();
        this.editressource = null;
      });
    }

  }


  editressources(ressource:Ressource):void{
 this.editressource =ressource;
 this.ressourceForm.patchValue({
  Date_ajout: ressource.Date_ajout,
  Description: ressource.Description,
  Type: ressource.Type,
  content: ressource.content
  
});
  }
  deleteressource(id: number) {
    this.RessourceService.deleteRessource(id).subscribe(
      response => {
        console.log(response);
         // Refresh the list after deletion
      },
      error => {
        console.log('Error', error);
      }
    );
  }
  onFileSelected(event: any) {
    const fileInput = event.target as HTMLInputElement;
    const file: File | null = fileInput.files?.[0] || null;

    if (file) {
        // Read the file content
        const reader = new FileReader();
        reader.onload = () => {
            // Encode the file content as Base64
            const base64Content = reader.result?.toString().split(',')[1]; // Extract base64 content from Data URL
            // Set the value of the content form control to the Base64 encoded file content
            this.ressourceForm.get('content')?.setValue(base64Content);
        };
        reader.readAsDataURL(file);
    }
}


extractFileName(content: Blob): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64Content = reader.result as string;
      // Parse the base64 content to extract the file name
      const binaryData = atob(base64Content);
      const regexResult = /filename="([^"]+)"/.exec(binaryData);
      if (regexResult && regexResult.length > 1) {
        // The file name should be captured in the first capturing group
        resolve(regexResult[1]);
      } else {
        reject('File name not found in content');
      }
    };
    reader.onerror = () => {
      reject('Error reading content');
    };
    reader.readAsDataURL(content);
  });
}


}