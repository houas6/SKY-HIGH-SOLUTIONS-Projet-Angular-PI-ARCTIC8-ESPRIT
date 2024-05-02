import { Modalite } from "./Modalite";


export class Session {
   idSession!: number;
   Date_debut!: Date;
   duree!: number;
   nbr_personne!: number;
   topic!: string;
   modalite!: Modalite;
   instructor!: {
    idUser: number; // Assuming 'id' is the identifier of the instructor
    // Add other properties of the User class as needed
    // For example:
     nom: string;
     mail:string;
    // email: string;
  };
}
