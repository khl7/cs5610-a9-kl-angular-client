import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { QuestionServiceClient } from "../services/QuestionServiceClient";

@Component({
  selector: "app-quiz",
  templateUrl: "./quiz.component.html",
  styleUrls: ["./quiz.component.css"],
})
export class QuizComponent implements OnInit {
  constructor(
    private service: QuestionServiceClient,
    private route: ActivatedRoute
  ) {}
  questions = [];
  quizId = "";

  submitQuiz = () => {
    fetch(`http://localhost:3000/api/quizzes/${this.quizId}/attempts`, {
      method: "POST",
      body: JSON.stringify(this.questions),
      headers: {
        "content-type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((result) => console.log(result));
  };
  ngOnInit(): void {
    this.route.params.subscribe((ps) => {
      this.quizId = ps.quizId;
      this.service
        .findQuestionsForQuiz(this.quizId)
        .then((questions) => (this.questions = questions));
    });
  }
}
