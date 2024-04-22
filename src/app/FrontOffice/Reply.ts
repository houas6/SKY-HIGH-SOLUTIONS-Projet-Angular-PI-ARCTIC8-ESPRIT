export class Reply {
  idReply!: number;
  contentReply!: string;
  replyDate!: Date;
  Repliedat!:{
    idComment:number;

  }; // Assuming this is the id of the User who replied
  Repliedby!:{
    idUser: number; // Assuming 'id' is the identifier of the instructor
    // Add other properties of the User class as needed
    // For example:
     nom: string;
     mail:string;
    // email: string;
  };
  constructor() {
      this.replyDate = new Date();
  }
}
