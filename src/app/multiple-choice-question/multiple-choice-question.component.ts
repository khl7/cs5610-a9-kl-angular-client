import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: "app-multiple-choice-question",
  templateUrl: "./multiple-choice-question.component.html",
  styleUrls: ["./multiple-choice-question.component.css"],
})
export class MultipleChoiceQuestionComponent implements OnInit {
  @Input()
  question = {
    _id: "",
    title: "",
    question: "",
    choices: [],
    correct: "",
    answer: "",
  };
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
