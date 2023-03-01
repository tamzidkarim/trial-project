export interface Quiz {
  _id: string;
  title: string;
  description: string;
  questions: Question[];
  isPublished: boolean;
}

export interface Question {
  title: string;
  options: string[];
  answer: number;
}
