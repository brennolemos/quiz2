import { CountdownCircleTimer } from "react-countdown-circle-timer";
import styles from "styles/Timer.module.css";

interface TimerProps {
  duration: number;
  finishedTime: () => void;
}

const Timer = (props: TimerProps) => {
  return (
    <div className={styles.timer}>
      <CountdownCircleTimer
        duration={props.duration}
        size={120}
        isPlaying
        onComplete={props.finishedTime}
        colors={["#bce596", "#f7b801", "#ed827a"]}
        colorsTime={[
          props.duration,
          props.duration / 3,
          0,
        ]}
      >
        {({remainingTime}) => remainingTime}
        </CountdownCircleTimer>
    </div>
  );
};

export default Timer;
