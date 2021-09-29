import { Component } from '@angular/core';
import { QuizAnswer, Quizlet, QuestionAnswer, QuizQuestion } from './mini-movie/quizlet/quizlet.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Running Out Time Productions';
  quizObj: Quizlet;

  constructor() {
    this.quizObj = new Quizlet();
    this.quizObj.questions = new Array<QuizQuestion>();
    this.quizObj.quiz_title = "What character are you?";
    this.quizObj.answers = new Array<QuizAnswer>();

    // Answers
    let answers = [
      ["agent_danger", "Agent Danger"],
      ["agent_sneaky", "Agent Sneaky"],
      ["villian", "Mystery Woman"],
      ["ledgend", "The Ledgend"]
     ]
     for(let a of answers){
       let answer = new QuizAnswer();
       answer.value = a[0];
       answer.displayName = a[1];
       answer.points = 0;
       this.quizObj.answers.push(answer);
     }

    // Question 1
    let question1 = new QuizQuestion();
    question1.title = "What do you love most?"
    question1.options = new Array<QuestionAnswer>();
    let options = [
     ["agent_danger", "My Mustache"],
     ["agent_sneaky", "My Gadgets"],
     ["villian", "Revenge"],
     ["ledgend", "Protecting my Family"]
    ]
    for(let op of options){
      let q1op = new QuestionAnswer();
      q1op.value = op[0];
      q1op.displayName = op[1];
      question1.options.push(q1op);
    }

    // Question 2
    let question2 = new QuizQuestion();
    question2.title = "How do you spend your day?"
    question2.options = new Array<QuestionAnswer>();
    let options2 = [
     ["agent_danger", "Working out"],
     ["agent_sneaky", "Playing video games"],
     ["villian", "Playing with cats"],
     ["ledgend", "Cooking and relaxing"]
    ]
    for(let op of options2){
      let q2op = new QuestionAnswer();
      q2op.value = op[0];
      q2op.displayName = op[1];
      question2.options.push(q2op);
    }

    this.quizObj.questions.push(question1);
    this.quizObj.questions.push(question2);
  }
}
