import { useEffect, useState } from "react";

import QuestionModel from "model/Question";
import Quiz from "components/Quiz";

const BASE_URL = "http://localhost:3000/api";

export default function Home() {
  const [questionsIds, setQuestionsIds] = useState([]);
  const [question, setQuestion] = useState<QuestionModel>();
  const [correctQuestions, setCorrectQuestions] = useState(0);

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

  const responseQuestion = (question: QuestionModel) => {
    setQuestion(question);
    const correct = question.correct;
    setCorrectQuestions(
      (prevCorrectQuestions) => prevCorrectQuestions + (correct ? 1 : 0),
    );
  };

  const getNextQuestionId = () => {
    const nextId = questionsIds.indexOf(question?.id) + 1;
    return questionsIds[nextId];
  };

  const goToNextQuestion = () => {
    const nextId = getNextQuestionId();
    nextId ? loadQuestion(nextId) : finishQuiz();
  };

  const finishQuiz = () => {};

  return (
    <Quiz
      question={question}
      isLast={getNextQuestionId() === undefined}
      responseQuestion={responseQuestion}
      goToNext={goToNextQuestion}
    />
  );
}
