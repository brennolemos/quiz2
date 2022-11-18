import AnswerModel from "./Answer";

export default class QuestionModel {
  #id: number;
  #text: string;
  #answers: AnswerModel[];
  #correct: boolean;
  // #answered: boolean;

  constructor(
    id: number,
    text: string,
    answers: AnswerModel[],
    correct = false,
  ) {
    this.#id = id;
    this.#text = text;
    this.#answers = answers;
    this.#correct = correct;
  }

  get id() {
    return this.#id;
  }

  get text() {
    return this.#text;
  }

  get answers() {
    return this.#answers;
  }

  get correct() {
    return this.#correct;
  }

  get answered() {
    for (let answer of this.#answers) {
      if (answer.revealed) return true;
    }

    return false;
  }
}
