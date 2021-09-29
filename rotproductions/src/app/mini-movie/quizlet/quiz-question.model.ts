export class QuizQuestion {
  title: string;
  options: Array<QuizOption>;
}

export class QuizOption {
  value: string;
  display_option: string;
}