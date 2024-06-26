import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {University} from "../../../models/base/university";
import {Faculty} from "../../../models/base/faculty";
import {Programme} from "../../../models/base/programme";
import {MatSelectChange} from "@angular/material/select";
import {Discipline} from "../../../models/base/discipline";
import {ActivatedRoute} from "@angular/router";
import {UniversityService} from "../../../services/business-logic/university.service";
import {FacultyService} from "../../../services/business-logic/faculty.service";
import {ProgrammeService} from "../../../services/business-logic/programme.service";
import {DisciplineService} from "../../../services/business-logic/discipline.service";
import {ReviewService} from "../../../services/business-logic/review.service";
import {Review} from "../../../models/base/review";

@Component({
  selector: 'app-create-review',
  templateUrl: './create-review.component.html',
  styleUrl: './create-review.component.css'
})
export class CreateReviewComponent implements OnInit {
  reviewForm = this.fb.group({
    comment: ['', Validators.required],
    courseRating: ['', [Validators.required, Validators.min(1), Validators.max(5)]],
    lecturerRating: ['', [Validators.required, Validators.min(1), Validators.max(5)]],
    assistantsRating: ['', [Validators.required, Validators.min(1), Validators.max(5)]],
    difficulty: ['', [Validators.required, Validators.min(1), Validators.max(5)]],
    usefulness: ['', [Validators.required, Validators.min(1), Validators.max(5)]],
    workLoad: ['', [Validators.required, Validators.min(1), Validators.max(5)]],
  });

  review: Review = new Review('', '', new Date(), 0, 0, 0, 0, 0, 0, '', '', false, false, false, false, false, false, false, false, false);
  universityId: string = '';
  facultyId: string = '';
  programmeId: string = '';
  disciplineId: string = '';
  universities: University[] = [];
  faculties: Faculty[] = [];
  programmes: Programme[] = [];
  disciplines: Discipline[] = [];

  constructor(private route: ActivatedRoute,
              private fb: FormBuilder,
              private universityService: UniversityService,
              private facultyService: FacultyService,
              private programmeService: ProgrammeService,
              private disciplineService: DisciplineService,
              private reviewService: ReviewService){}

  ngOnInit(): void {
    this.universityService.getAllObjects()
      .subscribe(universities => {
        this.universities = universities;
      });      
  }
  
  submitReview() {
    if (this.reviewForm.valid) {
      this.review.comment = this.reviewForm.controls.comment.value!;
      this.review.courseRating = +this.reviewForm.controls.courseRating.value!;
      this.review.lecturerRating = +this.reviewForm.controls.lecturerRating.value!;
      this.review.assistantsRating = +this.reviewForm.controls.assistantsRating.value!;
      this.review.difficulty = +this.reviewForm.controls.difficulty.value!;
      this.review.usefulness = +this.reviewForm.controls.usefulness.value!;
      this.review.workLoad = +this.reviewForm.controls.workLoad.value!;
      this.review.disciplineId = this.disciplineId;
      this.review.userId = localStorage.getItem('userId')!;
      this.review = Object.assign({}, this.review);
      
      this.reviewService.createObject(this.review);
    }
  }

  updateUniversity($event: MatSelectChange) {
    this.universityId = $event.value;
    this.facultyService.getFacultyByUniversityId(this.universityId)
      .subscribe(faculties => {
        this.faculties = faculties;
      })
  }

  updateFaculty($event: MatSelectChange) {
    this.facultyId = $event.value;
    this.programmeService.getProgrammesForFaculty(this.facultyId)
      .subscribe(programmes => {
        this.programmes = programmes;
      })
  }

  updateProgramme($event: MatSelectChange) {
    this.programmeId = $event.value;
    this.disciplineService.getDisciplinesForProgramme(this.programmeId)
      .subscribe(disciplines => {
        this.disciplines = disciplines;
      })
  }
}
