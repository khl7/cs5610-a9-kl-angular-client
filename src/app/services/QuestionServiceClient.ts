import { Injectable } from "@angular/core";
@Injectable()
export class QuestionServiceClient {
  findQuestionsForQuiz = qid =>
    fetch(`https://cs5610-sp20-kl-node-server.herokuapp.com/api/quizzes/${qid}/questions`).then(response =>
      response.json()
    );
}
