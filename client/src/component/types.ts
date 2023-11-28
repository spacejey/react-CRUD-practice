export interface IDay {
  id: number,
  day: string
}

export interface IProps {
  word: IWord;
}

export interface IWord {
  day: string;
  eng: string;
  kor: string;
  isDone: boolean;
  id: number;
}

export interface ProcessProps {
  totalWords: number
  doneWordsCount: number
}

export interface CheerMessageProps {
  progress: number
}