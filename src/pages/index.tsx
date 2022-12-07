import AnswerModel from "../model/Answer";
import QuestionModel from "../model/Question";

import Question from "../components/Question";

export default function Home() {
  const testQuestion = new QuestionModel(1, "Melhor cor?", [
    AnswerModel.incorrect("Green"),
    AnswerModel.incorrect("Red"),
    AnswerModel.incorrect("Blue"),
    AnswerModel.correct("Black"),
  ]);

  return <Question value={testQuestion} />;
}
