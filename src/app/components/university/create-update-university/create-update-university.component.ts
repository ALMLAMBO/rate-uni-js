import { Component } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {UniversityService} from "../../../services/business-logic/university.service";
import {University} from "../../../models/base/university";

@Component({
  selector: 'app-create-update-university',
  templateUrl: './create-update-university.component.html',
  styleUrl: './create-update-university.component.css'
})
export class CreateUpdateUniversityComponent {
  universityForm = this.formBuilder.group({
    name: ['', Validators.required],
    rector: ['', Validators.required],
    hqAddress: ['', Validators.required]
  });
  
  constructor(private formBuilder: FormBuilder,
              private universityService: UniversityService) {}
  
  submitUniversity() {
    if (!this.universityForm.valid) {
      return;
    }
    
    this.universityService.createObject(this.universityForm.value as University);
  }
}
