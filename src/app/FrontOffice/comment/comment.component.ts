import { Component, OnInit , Input} from '@angular/core';
import { Comment } from '../Comment';
import { CommentServiceService } from '../../Services/comment-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// List of prohibited words
const badWords = ['fuck', 'shit','damn','eww','disgusting'];

// Function to check if a comment contains a bad word
function containsBadWord(comment: string) {
  for (let word of badWords) {
    if (comment.toLowerCase().includes(word)) {
      return true;
    }
  }
  return false;
}

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrl: './comment.component.css'
})
export class CommentComponent implements OnInit {
  comments: any[]=[];
  idSession!: number; // will be set based on the session that was clicked
  // will be set by user input
  commentForm!:FormGroup;

  constructor(private commentService: CommentServiceService,private formBuilder:FormBuilder) {
    this.commentForm = this.formBuilder.group({
      content: ['', Validators.required],
      idSession: ['', [Validators.required, Validators.pattern('^[0-9]+$')]] // Assuming you manually input session ID
    });
  }

  ngOnInit() {
    this.commentService.getAllComments().subscribe(
      (data: any[]) => {
        // Iterate through each item and include both top-level comments and their replies
        this.comments = data.filter(item => item.hasOwnProperty('idComment'));
        console.log('All comments:', this.comments);
      },
      error => {
        console.error('Error getting comments: ' + error);
      }
    );
  }


  createComment() {
    if (this.commentForm.valid) {
      const sessionId = this.commentForm.get('idSession')?.value; // Get session ID from the form
      const content = this.commentForm.get('content')?.value; // Get comment content from the form

      if (sessionId && content) { // Ensure both sessionId and content are not null
        // Check if the comment contains a bad word
        if (containsBadWord(content)) {
          console.error('Comment contains prohibited words.');
          return;
        }

        // Pass sessionId and content separately
        this.commentService.createComment(sessionId, content).subscribe(
          comment => {
            console.log(comment);
            // Clear the form after successful submission
            this.commentForm.reset();
          },
          error => {
            console.error('Error creating comment: ' + error);
          }
        );
      }
    }
  }
  deleteComment(commentId: number) {
    this.commentService.deleteComment( commentId).subscribe(
      () => {
        console.log('Comment deleted successfully');
        // Refresh the comments
        this. ngOnInit();
      },
      error => {
        console.error('Error deleting comment: ' + error);
      }
    );
  }
}
