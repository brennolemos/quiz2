import QuestionModel from "../model/Question";
import styles from "../styles/Question.module.css";
import Answer from "./Answer";
import Statement from "./Statement";

const options = [
  { value: "A", color: "#f2c866" },
  { value: "B", color: "#f266ba" },
  { value: "C", color: "#85d4f2" },
  { value: "D", color: "#bce596" },
];

interface QuestionProps {
  value: QuestionModel;
}

const Question = (props: QuestionProps) => {
  const question = props.value;

  const renderAnswers = () => {
    return question.answers.map((answer, i) => {
      return (
        <Answer
          key={i}
          value={answer}
          index={i}
          option={options[i].value}
          optionColorBg={options[i].color}
        />
      );
    });
  };

  return (
    <div className={styles.question}>
      <Statement text={question.text} />
      {renderAnswers()}
    </div>
  );
};

export default Question;
