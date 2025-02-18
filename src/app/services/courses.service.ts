import { inject, Injectable } from "@angular/core";
import { HttpClient, HttpContext } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { firstValueFrom, Observable } from "rxjs";
import { Course } from "../models/course.model";
import { getCoursesResponse } from "../models/get-courses.response";

@Injectable({
    providedIn: "root"
  })
  export class CoursesService {
  
    http = inject(HttpClient);
    env = environment;

    async loadAllCourses():Promise<Course[]>{

      // Observable
      const courses$ = this.http.get<getCoursesResponse>(`${this.env.apiRoot}/courses`);
      
      // firstValueFrom: RxJS の Observable を Promise に変換し、最初のデータを取得する関数
      const response = await firstValueFrom(courses$);
      console.log('Response: ', response);
      return response.courses;
    }
  }