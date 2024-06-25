import {Component, OnInit} from '@angular/core';
import {Discipline} from "../../../models/base/discipline";
import {DisciplineService} from "../../../services/business-logic/discipline.service";
import {ActivatedRoute} from "@angular/router";
import {ReviewService} from "../../../services/business-logic/review.service";
import {environment} from "../../../../environments/environment.development";
import {Review} from "../../../models/base/review";

@Component({
  selector: 'app-discipline-details',
  templateUrl: './discipline-details.component.html',
  styleUrl: './discipline-details.component.css'
})
export class DisciplineDetailsComponent implements OnInit {
  discipline: Discipline = {} as Discipline;
  reviews: Review[] = [];

  constructor(private route: ActivatedRoute,
              private disciplineService: DisciplineService,
              private reviewService: ReviewService) {
    
  }
  
  ngOnInit(): void {
    let disciplineId = '';
    this.route.params.subscribe(params => {
      disciplineId = params[environment.urlIds.discipline];
    });

    this.disciplineService.getObjectById(disciplineId)
      .subscribe((data: Discipline) => {
        this.discipline = data;
      });
    
    this.reviewService.getReviewsForDiscipline(disciplineId)
      .subscribe((data: Review[]) => {
        this.reviews = data;
      });
  }
}
