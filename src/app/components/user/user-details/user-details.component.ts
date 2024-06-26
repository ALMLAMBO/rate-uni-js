import {Component, OnInit} from '@angular/core';
import {Review} from "../../../models/base/review";
import {ReviewService} from "../../../services/business-logic/review.service";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css'
})
export class UserDetailsComponent implements OnInit {
  reviews: Review[] = [];

  constructor(private reviewService: ReviewService) {
  }
  
  ngOnInit(): void {
    this.reviewService.getReviewsForUser(localStorage.getItem('userId')!)
      .subscribe(reviews => {
        this.reviews = reviews;
        console.log(reviews);
      });      
  }
}
