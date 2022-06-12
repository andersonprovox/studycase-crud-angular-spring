import { CoursesService } from './../services/courses.service';
import { Component, OnInit } from '@angular/core';
import { Course } from '../model/course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  courses: Course[] = [

  ];
  displayedColumns = ['name', 'category'];
  // aqui vai ser declarada o acesso do http direto no componente, por isso foi comentada essa instância
  //coursesService: CoursesService;

  constructor() {
    //this.coursesService = new CoursesService();
    this.courses = this.coursesService.list();
   }

  ngOnInit(): void {
  }

}
