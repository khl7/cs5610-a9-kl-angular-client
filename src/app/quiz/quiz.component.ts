import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { QuestionServiceClient } from "../services/QuestionServiceClient";
import { QuizzesAttemptsServiceClient } from "../services/QuizzesAttemptsServiceClient";

@Component({
  selector: "app-quiz",
  templateUrl: "./quiz.component.html",
  styleUrls: ["./quiz.component.css"],
})
export class QuizComponent implements OnInit {
  constructor(
    private service: QuestionServiceClient,
    private quizzesAttemptsService: QuizzesAttemptsServiceClient,
    private route: ActivatedRoute
  ) {}
  questions = [];
  quizId = "";

  submitQuiz = () => {
    this.quizzesAttemptsService.updateQuizAttemptsForQUiz(this.quizId, this.questions)
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
