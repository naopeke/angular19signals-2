import { Component, signal } from '@angular/core';
import { Course, sortCourseBySeqNo } from '../models/course.model';
import { CourseCardListComponent } from '../course-card-list/course-card-list.component';
import { CoursesService } from '../services/courses.service';
import { MessagesService } from "../messages/messages.service";
import { catchError, from, throwError } from 'rxjs';
import { toObservable, toSignal, outputToObservable, outputFromObservable } from "@angular/core/rxjs-interop";
import { MatTab, MatTabGroup } from "@angular/material/tabs";
import { MatDialog } from "@angular/material/dialog";

@Component({
  selector: 'app-home',
  imports: [MatTabGroup, MatTab,],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  counter = signal(0);
  
  increment(){
    this.counter.set(this.counter()+1)
  }

}
