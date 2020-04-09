import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-true-false-question",
  templateUrl: "./true-false-question.component.html",
  styleUrls: ["./true-false-question.component.css"],
})
export class TrueFalseQuestionComponent implements OnInit {
  @Input()
  question = { _id: "", title: "", question: "", answer: "", correct: "" };

  @Input()
  answer = "";
  grading = false;

  @Output()
  answerChange = new EventEmitter<string>();
  submitAnswer = () => this.answerChange.emit(this.answer);

  grade = () => {
    this.grading = true;
  };

  constructor() {}

  ngOnInit(): void {}
}
