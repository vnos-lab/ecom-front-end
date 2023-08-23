"use client";
import React, { useState, useEffect } from "react";
import Styles from "./Countdown.module.css";
import Image from "next/image";
import IconTwoDot from "@/public/icon_two_dot.svg";

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
  
    const formattedDays = days.toString().padStart(2, '0');
    const formattedHours = hours.toString().padStart(2, '0');
    const formattedMinutes = minutes.toString().padStart(2, '0');
    const formattedSeconds = seconds.toString().padStart(2, '0');
  
    return { days: formattedDays, hours: formattedHours, minutes: formattedMinutes, seconds: formattedSeconds };
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
      <section className={Styles.section_box_two_dot}>
        <div className={Styles.section_two_dot}>
          <Image src={IconTwoDot} alt="icon_dot"/>
        </div>
      </section>
      <section>
        <p className={Styles.nameItemTime}>Hours</p>
        <p className={Styles.valueTime}>{timeLeft.hours}</p>
      </section>
      <section className={Styles.section_box_two_dot}>
        <div className={Styles.section_two_dot}>
          <Image src={IconTwoDot} alt="icon_dot"/>
        </div>
      </section>
      <section>
        <p className={Styles.nameItemTime}>Minutes</p>
        <p className={Styles.valueTime}>{timeLeft.minutes}</p>
      </section>
      <section className={Styles.section_box_two_dot}>
        <div className={Styles.section_two_dot}>
          <Image src={IconTwoDot} alt="icon_dot"/>
        </div>
      </section>
      <section>
        <p className={Styles.nameItemTime}>Seconds</p>
        <p className={Styles.valueTime}>{timeLeft.seconds}</p>
      </section>
    </div>
  );
};
export default Countdown;
