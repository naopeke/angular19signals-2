import { Component, inject, input, output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Course } from '../models/course.model';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-course-card-list',
  imports: [RouterLink],
  templateUrl: './course-card-list.component.html',
  styleUrl: './course-card-list.component.scss'
})
export class CourseCardListComponent {

}
