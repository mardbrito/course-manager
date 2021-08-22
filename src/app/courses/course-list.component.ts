import { Component, OnInit } from "@angular/core";
import { Course } from './course';

@Component({
    selector: "app-course-list",
    templateUrl: "./course-list.component.html"
})
export class CourseListComponent implements OnInit{

    courses: Course[] = [];
    ngOnInit(): void {
        this.courses = [
            {
                id: 1,
                name: "Angular Learning",
                imageUrl: "favicon.ico",
                price: 90.99,
                code: "XPS-8790",
                duration: 120,
                rating: 4.5,
                releaseDate: "November, 2, 2021",
                description: "Test of description"                
            },
            {
                id: 3,
                name: "Angular Forms",
                imageUrl: "favicon.ico",
                price: 190.99,
                code: "ABC-8790",
                duration: 60,
                rating: 4.0,
                releaseDate: "November, 2, 2021",
                description: "Test of description two"                
            }
        ]
    }

}