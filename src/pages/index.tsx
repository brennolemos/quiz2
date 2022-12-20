import { useEffect, useState } from "react";

import AnswerModel from "model/Answer";
import QuestionModel from "model/Question";
import Quiz from "components/Quiz";

const BASE_URL = "http://localhost:3000/api";

const mockQuestion = new QuestionModel(1, "Melhor cor?", [
  AnswerModel.incorrect("Green"),
  AnswerModel.incorrect("Red"),
  AnswerModel.incorrect("Blue"),
  AnswerModel.correct("Black"),
]);

export default function Home() {
  const [questionsIds, setQuestionsIds] = useState([]);
  const [question, setQuestion] = useState(mockQuestion);

  const loadQuestionsIds = async () => {
    const resp = await fetch(`${BASE_URL}/quiz`);
    const questionsIds = await resp.json();
    setQuestionsIds(questionsIds);
  };

  const loadQuestion = async (questionId: number) => {
    const resp = await fetch(`${BASE_URL}/questions/${questionId}`);
    const json = await resp.json();
    const newQuestion = QuestionModel.fromObject(json);
    setQuestion(newQuestion);
  };

  useEffect(() => {
    loadQuestionsIds();
  }, []);

  useEffect(() => {
    questionsIds.length && loadQuestion(questionsIds[0]);
  }, [questionsIds]);

  const responseQuestion = (question: QuestionModel) => {};

  const goToNext = () => {};

  return (
    <Quiz
      question={question}
      isLast={true}
      responseQuestion={responseQuestion}
      goToNext={goToNext}
    />
  );
}
