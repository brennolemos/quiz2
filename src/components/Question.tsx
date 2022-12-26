import QuestionModel from "model/Question";
import styles from "styles/Question.module.css";

import Answer from "./Answer";
import Statement from "./Statement";
import Timer from "./Timer";

const options = [
  { value: "A", color: "#f2c866" },
  { value: "B", color: "#f266ba" },
  { value: "C", color: "#85d4f2" },
  { value: "D", color: "#bce596" },
];

interface QuestionProps {
  value: QuestionModel;
  questionDuration?: number;
  onAnswer: (index: number) => void;
  finishedTime: () => void;
}

const Question = (props: QuestionProps) => {
  const question = props.value;

  const renderAnswers = () => {
    return question.answers.map((answer, i) => {
      return (
        <Answer
          key={`${question.id}-${i}`}
          value={answer}
          index={i}
          option={options[i].value}
          optionColorBg={options[i].color}
          onAnswer={props.onAnswer}
        />
      );
    });
  };

  return (
    <div className={styles.question}>
      <Statement text={question.text} />
      <Timer key={question.id} duration={props.questionDuration ?? 10} finishedTime={props.finishedTime} />
      {renderAnswers()}
    </div>
  );
};

export default Question;
