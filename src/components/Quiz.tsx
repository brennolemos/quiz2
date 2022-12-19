import styles from "styles/Quiz.module.css";
import QuestionModel from "model/Question";
import Question from "./Question";
import Button from "./Button";

interface QuizProps {
  question: QuestionModel;
  isLast: boolean;
  responseQuestion: (question: QuestionModel) => void;
  goToNext: () => void;
}

const Quiz = (props: QuizProps) => {
  const handleAnswer = (index: number) => {
    if (!props.question.answered) {
      props.responseQuestion(props.question.answerWith(index));
    }
  };

  return (
    <div className={styles.quiz}>
      {props.question ? (
        <Question
          value={props.question}
          questionDuration={6}
          onAnswer={handleAnswer}
          finishedTime={props.goToNext}
        />
      ) : null}

      <Button
        onClick={props.goToNext}
        text={props.isLast ? "Finish" : "Next"}
      />
    </div>
  );
};

export default Quiz;
