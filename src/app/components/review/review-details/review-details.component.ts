import {Component, Input} from '@angular/core';
import {Review} from "../../../models/base/review";
import {Discipline} from "../../../models/base/discipline";

@Component({
  selector: 'app-review-details',
  templateUrl: './review-details.component.html',
  styleUrl: './review-details.component.css'
})
export class ReviewDetailsComponent {
  @Input()
  review: Review = {} as Review;

  @Input()
  discipline: Discipline = {} as Discipline;

  @Input()
  programmeName: string = 'Test';
}
