import { Component } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-create-review',
  templateUrl: './create-review.component.html',
  styleUrl: './create-review.component.css'
})
export class CreateReviewComponent {
  reviewForm = this.fb.group({
    university: ['', Validators.required],
    faculty: ['', Validators.required],
    programme: ['', Validators.required],
    discipline: ['', Validators.required],
    comment: ['', Validators.required],
    courseRating: ['', [Validators.required, Validators.min(1), Validators.max(5)]],
    lecturerRating: ['', [Validators.required, Validators.min(1), Validators.max(5)]],
    assistantsRating: ['', [Validators.required, Validators.min(1), Validators.max(5)]],
    difficulty: ['', [Validators.required, Validators.min(1), Validators.max(5)]],
    usefulness: ['', [Validators.required, Validators.min(1), Validators.max(5)]],
    workLoad: ['', [Validators.required, Validators.min(1), Validators.max(5)]],
  });
  
  constructor(private fb: FormBuilder){}
  
  submitReview() {
    if (!this.reviewForm.valid) {
      return;
    }
  }
}
