import { useState } from "react";

import AnswerModel from "model/Answer";
import QuestionModel from "model/Question";
import Quiz from "components/Quiz";

const mockQuestion = new QuestionModel(1, "Melhor cor?", [
  AnswerModel.incorrect("Green"),
  AnswerModel.incorrect("Red"),
  AnswerModel.incorrect("Blue"),
  AnswerModel.correct("Black"),
]);

export default function Home() {
  const [question, setQuestion] = useState(mockQuestion);

  const responseQuestion = (question: QuestionModel) => {};

  const goToNext = () => {};

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Quiz
        question={question}
        isLast={true}
        responseQuestion={responseQuestion}
        goToNext={goToNext}
      />
    </div>
  );
}
