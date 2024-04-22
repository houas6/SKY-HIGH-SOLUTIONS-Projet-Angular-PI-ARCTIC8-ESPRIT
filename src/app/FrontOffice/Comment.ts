export class Comment {
  idComment!: number;
  content!: string;
  createdAt: Date = new Date(); // set to current date
  postedBy!: {
    idUser: number;
    nom: string;
  };
  sessionComment!: {
    idSession: number;
  };
}
