import styles from "../styles/Statement.module.css";

interface StatementProps {
  text: string;
}

const Statement = (props: StatementProps) => {
  return (
    <div className={styles.statement}>
      <div className={styles.text}>{props.text}</div>
    </div>
  );
};

export default Statement;
