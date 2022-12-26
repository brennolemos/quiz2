import Stats from "components/Stats";
import { useRouter } from "next/router";
import { useEffect } from "react";
import styles from "styles/Result.module.css";

const Result = () => {
  const router = useRouter();

  const total = +router?.query?.total;
  const correct = +router?.query?.correct;
  const percentage = Math.round(correct / total) * 100;

  return (
    <div className={styles.result}>
      <h1>Final result</h1>
      <div style={{ display: "flex" }}>
        <Stats text="Questions" value={total} />
        <Stats text="Correct" value={correct} bgColor="#9cd2a4" />
        <Stats text="Percentage" value={percentage} bgColor="#de6a33" />
      </div>
    </div>
  );
};

export default Result;
