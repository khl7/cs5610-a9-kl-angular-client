import { Injectable } from "@angular/core";
@Injectable()
export class QuizzesAttemptsServiceClient {
  updateQuizAttemptsForQUiz = (quizId, questions) =>
    fetch(`https://cs5610-sp20-kl-node-server.herokuapp.com/api/quizzes/${quizId}/attempts`, {
      method: "POST",
      body: JSON.stringify(questions),
      headers: {
        "content-type": "application/json",
      },
    }).then((response) => response.json());
  findAttemptsForQuiz = (qid) =>
    fetch(
      `https://cs5610-sp20-kl-node-server.herokuapp.com/api/quizzes/${qid}/attempts`
    ).then((response) => response.json());
}
