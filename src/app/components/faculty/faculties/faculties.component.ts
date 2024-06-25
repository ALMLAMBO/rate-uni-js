import {Component, Input, OnInit} from '@angular/core';
import { Faculty } from '../../../models/base/faculty';
import {ActivatedRoute} from "@angular/router";
import {environment} from "../../../../environments/environment.development";

@Component({
  selector: 'app-faculties',
  templateUrl: './faculties.component.html',
  styleUrl: './faculties.component.css'
})
export class FacultiesComponent implements OnInit {
  @Input() faculties: Faculty[] = [];
  universityId: string = '';

  constructor(private route: ActivatedRoute){
    
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.universityId = params[environment.urlIds.university];
    });      
  }
}
