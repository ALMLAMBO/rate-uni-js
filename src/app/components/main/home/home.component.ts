import {Component, OnInit} from '@angular/core';
import {ReviewService} from "../../../services/business-logic/review.service";
import {Review} from "../../../models/base/review";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  reviews: Review[] = [];

  constructor(private reviewService: ReviewService) {

  }

  ngOnInit(): void {
    this.reviewService.getLatest6Reviews()
      .subscribe(reviews => {
        this.reviews = reviews;
      })
  }
}
