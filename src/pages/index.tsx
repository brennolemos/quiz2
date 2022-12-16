import { useState } from "react";

import AnswerModel from "model/Answer";
import QuestionModel from "model/Question";
import Question from "components/Question";

const mockQuestion = new QuestionModel(1, "Melhor cor?", [
  AnswerModel.incorrect("Green"),
  AnswerModel.incorrect("Red"),
  AnswerModel.incorrect("Blue"),
  AnswerModel.correct("Black"),
]);

export default function Home() {
  const [question, setQuestion] = useState(mockQuestion);

  const onAnswer = (index: number) => {
    setQuestion(question.answerWith(index));
  };

  const finishedTime = () => {
    if (!question.answered) setQuestion(question.answerWith(-1));
  };

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Question
        value={question}
        onAnswer={onAnswer}
        finishedTime={finishedTime}
      />
    </div>
  );
}
