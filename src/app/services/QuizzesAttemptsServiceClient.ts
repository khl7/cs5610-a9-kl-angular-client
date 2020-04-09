import { Injectable } from "@angular/core";
@Injectable()
export class QuizzesAttemptsServiceClient {
  updateQuizAttemptsForQUiz = (quizId, questions) =>
    fetch(`http://localhost:3000/api/quizzes/${quizId}/attempts`, {
      method: "POST",
      body: JSON.stringify(questions),
      headers: {
        "content-type": "application/json",
      },
    }).then((response) => response.json());
  findAttemptsForQuiz = (qid) =>
    fetch(
      `http://localhost:3000/api/quizzes/${qid}/attempts`
    ).then((response) => response.json());
}
