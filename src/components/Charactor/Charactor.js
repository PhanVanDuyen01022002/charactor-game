import classNames from "classnames/bind";
import { useState } from "react";
import styles from "./Charactor.module.scss";

const cx = classNames.bind(styles);

function Charactor() {
  const [playerAScore, setPlayerAScore] = useState(1);
  const [playerBScore, setPlayerBScore] = useState(1);

  const handleRace = () => {
    const randomPlayer = Math.random() < 0.5 ? "A" : "B";
    if (randomPlayer == "A") {
      setPlayerAScore((prev) => prev + 1);
    } else {
      setPlayerBScore((prev) => prev + 1);
    }
  };

  const handleReset = () => {
    setPlayerAScore(1);
    setPlayerBScore(1);
  };

  return (
    <div className={cx("wrapper")}>
      <h4 className={cx("result-title")}>
        {playerAScore > playerBScore && "A is winning"}
        {playerAScore < playerBScore && "B is winning"}
        {playerAScore == playerBScore && "Same point"}
      </h4>

      <div className={cx("player")}>
        <p className={cx("player__name")}>Charactor A</p>
        {Array.from({ length: playerAScore }).map(() => (
          <div className={cx("player__point")} />
        ))}
      </div>
      <div className={cx("player")}>
        <p className={cx("player__name")}>Charactor B</p>
        {Array.from({ length: playerBScore }).map(() => (
          <div className={cx("player__point")} />
        ))}
      </div>

      <button onClick={handleRace} className={cx("race-btn")}>
        Race
      </button>
      <button onClick={handleReset} className={cx("reset-btn")}>
        Reset
      </button>
    </div>
  );
}

export default Charactor;
