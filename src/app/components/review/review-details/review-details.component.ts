import {Component, Input, OnInit} from '@angular/core';
import {Review} from "../../../models/base/review";
import {Discipline} from "../../../models/base/discipline";
import {DisciplineService} from "../../../services/business-logic/discipline.service";
import {DisciplineType} from "../../../vo/discipline-type";
import {DisciplineCategory} from "../../../vo/discipline-category";

@Component({
  selector: 'app-review-details',
  templateUrl: './review-details.component.html',
  styleUrl: './review-details.component.css'
})
export class ReviewDetailsComponent implements OnInit {
  @Input()
  review: Review = new Review('', '', new Date(), 0, 0, 0, 0, 0, 0, '', '', false, false, false, false, false, false, false, false, false);
  discipline: Discipline = new Discipline('','', '', 0, '', '', DisciplineCategory.PM, DisciplineType.ELECTIVE);

  constructor(private disciplineService: DisciplineService) {

  }

  ngOnInit(): void {
    this.disciplineService.getObjectById(this.review!.disciplineId)
      .subscribe(discipline => {
        this.discipline = discipline;
      });
  }
}
