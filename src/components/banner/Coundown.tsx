import React, { useState, useEffect } from "react";

// Define the type for the time left state
interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface CountdownTimerProps {
  targetDate: Date;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
  const calculateTimeLeft = (): TimeLeft => {
    const difference = targetDate.getTime() - new Date().getTime();
    let timeLeft: TimeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="rounded-[21px] py-[21px] px-[39px] text-[60px] bg-white text-black flex w-[756px] justify-between gap-[52px]">
      <div className="flex flex-col">
        <div className="text-[60px] font-black flex gap-[52px]">
          <span>{timeLeft.days || "0"} </span>
          <span className="font-normal">:</span>{" "}
        </div>
        <div className="font-montserrat font-bold text-[15px] ml-[19px]">
          Days
        </div>
      </div>

      <div className="flex flex-col">
        <div className="text-[60px] font-black flex gap-[52px]">
          <span>{timeLeft.hours || "0"}</span>{" "}
          <span className="font-normal">:</span>{" "}
        </div>
        <div className="font-montserrat font-bold text-[15px] ml-[19px]">
          Hours
        </div>
      </div>

      <div className="flex flex-col">
        <div className="text-[60px] font-black flex gap-[52px]">
          <span>{timeLeft.minutes || "0"}</span>{" "}
          <span className="font-normal">:</span>{" "}
        </div>
        <div className="font-montserrat font-bold text-[15px] ml-[19px]">
          Minutes
        </div>
      </div>

      <div className="flex flex-col">
        <div className="text-[60px] font-black flex gap-[52px]">
          {timeLeft.seconds || "0"}
        </div>
        <div className="font-montserrat font-bold text-[15px] ml-[19px]">
          Seconds
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
