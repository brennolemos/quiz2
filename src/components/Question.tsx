import QuestionModel from "../model/Question";
import styles from "../styles/Question.module.css";
import Answer from "./Answer";
import Statement from "./Statement";

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
          option="A"
          optionColorBg="#f2c866"
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
