import styles from "styles/Stats.module.css";

interface StatsProps {
  value: any;
  text: string;
  bgColor?: string;
  fontColor?: string;
}

const Stats = (props: StatsProps) => {
  return (
    <div className={styles.stats}>
      <div
        className={styles.value}
        style={{
          backgroundColor: props.bgColor ?? "#fdd60f",
          color: props.fontColor ?? "#333",
        }}
      >
        {props.value}
      </div>
      <div className={styles.text}>{props.text}</div>
    </div>
  );
};

export default Stats;
