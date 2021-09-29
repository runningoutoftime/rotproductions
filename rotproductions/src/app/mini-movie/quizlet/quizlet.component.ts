import { Component, Input, OnInit } from '@angular/core';
import { ApiRequestService } from '../../api-request.service';
import { Quizlet, QuizQuestion } from './quizlet.model';

@Component({
  selector: 'app-quizlet',
  templateUrl: './quizlet.component.html',
  styleUrls: ['./quizlet.component.scss']
})
export class QuizletComponent implements OnInit {

  // member variables
  @Input() quizlet: Quizlet;
  writeIn: string = "No One";
  activeQuestionIndex: any = 0;
  activeQuestion: QuizQuestion;
  results: Array<String> = [];
  finalResult: String = "";
  selectedValue: any;
  nextValue: String;
  errorMessage: String;

  constructor(private apiReq: ApiRequestService) {
  }

  ngOnInit() {
    this.apiReq.getTest();
    this.reset();
  }

  // member functions
  resetActiveQuestion() {
    this.activeQuestion = this.quizlet.questions[this.activeQuestionIndex];
  }

  prevQuestion() {
    console.log(this.activeQuestionIndex);
    console.log( this.quizlet.questions);
    this.results.pop();
    console.log("Now Values", this.results, this.nextValue);
    if (this.activeQuestionIndex > 0) {
      this.activeQuestionIndex -= 1;
    };
    this.resetActiveQuestion();
  }

  choose() {
    this.errorMessage = "";
    this.nextValue = this.selectedValue; 
    console.log("Next Value", this.nextValue);
  }

  nextQuestion() {
    if(!this.nextValue) {
      this.errorMessage = "Please choose one!"
      return;
    }
    console.log(this.activeQuestionIndex);
    console.log(this.quizlet.questions);
    this.results.push(this.nextValue);
    console.log("Now Values", this.results, this.nextValue);
    if (this.activeQuestionIndex <  this.quizlet.questions.length) {
      this.activeQuestionIndex += 1;
    };
    this.resetActiveQuestion();
    if (this.activeQuestionIndex == this.quizlet.questions.length) {
      this.calculateQuiz();
    }
  }

  calculateQuiz() {
    this.quizlet.answers.map((answer)=>{
      answer.points = this.results.filter( item => item == answer.value).length;
    })
    console.log(this.quizlet.answers);
    this.quizlet.answers = this.quizlet.answers.sort((a, b) => (a.points > b.points) ? -1 : 1)
    this.finalResult = this.quizlet.answers[0].displayName;
  }

  reset() {
    this.errorMessage = "";
    this.results = [];
    this.finalResult = "";
    this.activeQuestionIndex = 0;
    this.quizlet.answers.map((answer)=>{
      answer.points = 0;
    })
    this.resetActiveQuestion();
  }

}
