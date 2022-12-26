import { useRouter } from "next/router";
import styles from "styles/Result.module.css";

const Result = () => {
  const router = useRouter;

  const total = +router.query.total;
  const correct = +router.query.correct;
  const percentage = Math.round(correct / total) * 100;

  return (
    <div className={styles.result}>
      <h1>Final result</h1>
      <div>{total}</div>
      <div>{correct}</div>
      <div>{`${percentage}%`}</div>
    </div>
  );
};

export default Result;
