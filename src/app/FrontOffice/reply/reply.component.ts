import { Component, OnInit } from '@angular/core';
import { Reply } from '../Reply';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReplyServiceService } from '../../Services/reply-service.service';

@Component({
  selector: 'app-reply',
  templateUrl: './reply.component.html',
  styleUrl: './reply.component.css'
})
export class ReplyComponent implements OnInit{
  replies: any []=[];
  replyForm!: FormGroup;

  constructor(private replyService: ReplyServiceService, private formBuilder: FormBuilder){
    this.replyForm = this.formBuilder.group({
      reply: ['', Validators.required],
      commentId: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
       userId :['1']
    });


  }

  ngOnInit() {


  }
  createReply() {


      const commentId = this.replyForm.get('commentId')?.value; // Get comment ID from the form
      console.log('commentid ',commentId);
      const userId = this.replyForm.get('userId')?.value; // Get comment ID from the form
      console.log('userid ',userId);

      const reply = this.replyForm.get('reply')?.value; // Get reply content from the form
      console.log('before if ',reply);
      if (commentId && reply) { // Ensure both commentId and contentReply are not null
         // Replace with the actual user ID
         console.log('after if ',reply);

        this.replyService.createReply(userId,reply,commentId).subscribe(
          reply => {
            console.log(reply);
            // Clear the form after successful submission
            this.replyForm.reset();
          },
          error => {
            console.error('Error creating reply: ' + error);
          }
        );
      }
    }
    deleteReply(replyId: number) {
      this.replyService.deleteReply( replyId).subscribe(
        () => {
          console.log('reply deleted successfully');
          // Refresh the comments
          this. ngOnInit();
        },
        error => {
          console.error('Error deleting comment: ' + error);
        }
      );
    }
  }

