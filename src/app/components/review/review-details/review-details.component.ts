import {Component, Input, OnInit} from '@angular/core';
import {Review} from "../../../models/base/review";
import {Discipline} from "../../../models/base/discipline";
import {DisciplineService} from "../../../services/business-logic/discipline.service";
import {Programme} from "../../../models/base/programme";

@Component({
  selector: 'app-review-details',
  templateUrl: './review-details.component.html',
  styleUrl: './review-details.component.css'
})
export class ReviewDetailsComponent implements OnInit {
  @Input()
  review: Review = {} as Review;

  discipline: Discipline = {} as Discipline;
  programme: Programme = {} as Programme;

  constructor(private disciplineService: DisciplineService) {

  }

  ngOnInit(): void {
    this.disciplineService.getObjectById(this.review.disciplineId)
      .subscribe(discipline => {
        this.discipline = discipline;
      });

    this.disciplineService
      .getDisciplinePorgramme(this.review.id, this.review.disciplineId)
      .subscribe(programme => {
        this.programme = programme;
      });
  }
}
