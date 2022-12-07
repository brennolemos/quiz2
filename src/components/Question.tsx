import QuestionModel from "../model/Question";
import styles from "../styles/Question.module.css";

interface QuestionProps {
  value: QuestionModel;
}

const Question = (props: QuestionProps) => {
  const question = props.value;

  return (
    <div className={styles.question}>
      <h1>Question</h1>
    </div>
  );
};

export default Question;
