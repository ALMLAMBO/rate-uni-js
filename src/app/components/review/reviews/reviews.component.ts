import {Component, Input, input} from '@angular/core';
import {Review} from "../../../models/base/review";
import {Discipline} from "../../../models/base/discipline";

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.css'
})
export class ReviewsComponent {
  @Input()
  reviews: Review[] = [
    {} as Review,
    {} as Review
  ];
}
