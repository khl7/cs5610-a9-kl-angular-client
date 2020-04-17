import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { QuizServiceClient } from "../services/QuizzesServiceClient";
import { QuizzesAttemptsServiceClient } from "../services/QuizzesAttemptsServiceClient";

@Component({
  selector: "app-quizzes",
  templateUrl: "./quizzes.component.html",
  styleUrls: ["./quizzes.component.css"],
})
export class QuizzesComponent implements OnInit {
  constructor(
    private service: QuizServiceClient,
    private quizzesAttemptsService: QuizzesAttemptsServiceClient,
    private route: ActivatedRoute
  ) {}
  courseId = "";
  quizzes = [
    {
      title: "",
      attempts: [],
    },
  ];
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.courseId = params.courseId;
      this.service
        .findAllQuizzes()
        .then((quizzes) => {
          this.quizzes = quizzes;
          return quizzes.map((quiz) => {
            return fetch(
              `http://localhost:3000/api/quizzes/${quiz._id}/attempts`
            ).then((response) => response.json());
          });
        })
        .then((attemptPromises) => {
          return Promise.all(attemptPromises);
        })
        .then((attempts: any[]) => {
          console.log(attempts);
          for (let i = 0; i < this.quizzes.length; i++) {
            this.quizzes[i].attempts = attempts[i];
          }
        });
    });
  }
}
