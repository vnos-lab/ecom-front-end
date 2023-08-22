"use client";
import React, { useState, useEffect } from "react";
import Styles from "./Countdown.module.css";

interface CountdownProps {
  targetTimestamp: number;
}

const Countdown: React.FC<CountdownProps> = ({ targetTimestamp }) => {
  const calculateTimeLeft = () => {
    const currentTime = Math.floor(Date.now() / 1000);
    const timeLeft = targetTimestamp - currentTime;

    const days = Math.floor(timeLeft / (60 * 60 * 24));
    const hours = Math.floor((timeLeft % (60 * 60 * 24)) / (60 * 60));
    const minutes = Math.floor((timeLeft % (60 * 60)) / 60);
    const seconds = Math.floor(timeLeft % 60);

    return { days, hours, minutes, seconds };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetTimestamp]);

  return (
    <div className={Styles.bodyCountDown}>
      <section>
        <p className={Styles.nameItemTime}>Days</p>
        <p className={Styles.valueTime}>{timeLeft.days}</p>
      </section>
      <p className={Styles.spaceItems}>:</p>
      <section>
        <p className={Styles.nameItemTime}>Hours</p>
        <p className={Styles.valueTime}>{timeLeft.hours}</p>
      </section>
      <p className={Styles.spaceItems}>:</p>
      <section>
        <p className={Styles.nameItemTime}>Minutes</p>
        <p className={Styles.valueTime}>{timeLeft.minutes}</p>
      </section>
      <p className={Styles.spaceItems}>:</p>
      <section>
        <p className={Styles.nameItemTime}>Seconds</p>
        <p className={Styles.valueTime}>{timeLeft.seconds}</p>
      </section>
    </div>
  );
};
export default Countdown;
