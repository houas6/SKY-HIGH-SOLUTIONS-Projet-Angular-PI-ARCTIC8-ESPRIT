import { Component } from '@angular/core';
import {ComplaintService} from "../../Services/complaint.service";
import {CommentService} from "../../Services/comment.service";
import {ActivatedRoute, Router} from "@angular/router";
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";

@Component({
  selector: 'app-complaintdetailsadmin',
  templateUrl: './complaintdetailsadmin.component.html',
  styleUrl: './complaintdetailsadmin.component.css'
})
export class ComplaintdetailsadminComponent {
  complaint: any;
  comments!: any[];
  idComplaint!: any;
  idUser!: any;
  commentBeingEdited!: any;
  constructor(private complaintService: ComplaintService,
              private commentService: CommentService,
              private router: Router,
              private route: ActivatedRoute,
              private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.idComplaint = this.route.snapshot.paramMap.get('id');
    this.idUser = 1; // this.storageService.getUser().id
    this.getComplaint(this.idComplaint);
    this.getCommentsByComplaint(this.idComplaint);
  }

  getComplaint(idComplaint: number): void {
    this.complaintService.getComplaintById(idComplaint).subscribe((response) => {
      this.complaint = response;
    });
  }

  getImageUrl(imageName: string): SafeResourceUrl {
    const url = `http://localhost:8089/Pi/complaint/loadImage/${imageName}`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  getCommentsByComplaint(idComplaint: number): void {
    this.commentService.getCommentsByComplaint(idComplaint).subscribe((response) => {
      this.comments = response;
      console.log("Comments fetched successfully");
    });
  }

  addComment(idUser: number, idComplaint: number, content: string): void {
    const newComment = {
      content: content
    };
    this.commentService.createCommenta(idUser, idComplaint, newComment).subscribe((response) => {
      console.log('Comment added successfully:', response);
      this.getCommentsByComplaint(this.idComplaint);
    });
  }

  editComment(comment: any): void {
    this.commentBeingEdited = comment;
  }
  updateComment(idComment: number, content: string): void {
    const updatedComment = {
      content: content
    };

    this.commentService.updateComment(idComment, updatedComment).subscribe((response) => {
      console.log('Comment updated successfully:', response);
      this.getCommentsByComplaint(this.idComplaint);
      this.commentBeingEdited = null;
    });
  }

  deleteComment(idComment: number): void {
    if (window.confirm('Are you sure you want to delete this comment?')) {
      this.commentService.deleteComment(idComment).subscribe(() => {
        console.log('Comment deleted successfully');
        this.getCommentsByComplaint(this.idComplaint);
      });
    }
  }

  closeComplaint(idComment: number): void {
    if (window.confirm('Are you sure you want to close this complaint?')) {
      this.complaintService.closeComplaint(idComment).subscribe(() => {
        console.log('Complaint closed successfully');
        this.getComplaint(this.idComplaint);
      });
    }
  }

}
