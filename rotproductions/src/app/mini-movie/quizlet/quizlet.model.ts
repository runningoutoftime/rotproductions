export class Quizlet {
  quiz_title: string;
  questions: Array<QuizQuestion>;
  answers: Array<QuizAnswer>;
}

export class QuizQuestion {
  title: string;
  options: Array<QuestionAnswer>;
}

export class QuestionAnswer {
  value: string;
  displayName: string;
}

export class QuizAnswer {
  value: string;
  displayName: string;
  points: number;
}