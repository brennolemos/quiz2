import AnswerModel from "../model/Answer";
import styles from "../styles/Answer.module.css";

interface AnswerProps {
  value: AnswerModel;
  index: number;
  option: string;
  optionColorBg: string;
  onAnswer: (index: number) => void;
}

const Answer = (props: AnswerProps) => {
  const answer = props.value;

  return (
    <div className={styles.answer} onClick={() => props.onAnswer(props.index)}>
      <div className={styles["answer__content"]}>
        <div className={styles.front}>
          <div
            className={styles.option}
            style={{ backgroundColor: props.optionColorBg }}
          >
            {props.option}
          </div>
          <div className={styles.value}>{answer.value}</div>
        </div>
        <div className={styles.back}></div>
      </div>
    </div>
  );
};

export default Answer;
