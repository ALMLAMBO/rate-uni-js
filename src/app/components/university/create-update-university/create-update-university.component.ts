import { Component } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {UniversityService} from "../../../services/business-logic/university.service";
import {University} from "../../../models/base/university";
import {ActivatedRoute, Params} from "@angular/router";
import {environment} from "../../../../environments/environment.development";

@Component({
  selector: 'app-create-update-university',
  templateUrl: './create-update-university.component.html',
  styleUrl: './create-update-university.component.css'
})
export class CreateUpdateUniversityComponent {
  universityForm = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    rector: ['', [Validators.required, Validators.minLength(3)]],
    hqAddress: ['', [Validators.required, Validators.minLength(3)]]
  });
  
  universityId: string = '';
  update: boolean = false;
  
  constructor(private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private universityService: UniversityService) {
    
    this.route.params
      .subscribe((params:Params) => {
        this.universityId = params[environment.urlIds.university];
        if (this.universityId) {
          this.universityService.getObjectById(this.universityId)
            .subscribe((university: University) => {
              this.universityForm.controls.name.setValue(university.name);
              this.universityForm.controls.rector.setValue(university.rector);
              this.universityForm.controls.hqAddress.setValue(university.hqAddress);
            });
          
          this.update = true;
        }
      })
    
    console.log(this.universityId)
  }
  
  submitUniversity() {
    console.log(this.universityForm.valid);
    if (!this.universityForm.valid) {
      console.log("Invalid form");
    }
    else if (!this.update) {
      this.universityService.createObject(this.universityForm.value as University);
    }
    else {
      this.universityService.updateObject(this.universityId, this.universityForm.value as University);
    }
  }
}
