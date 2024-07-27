import React, { useState, useEffect } from "react";

const Timer = () => {
  const calculateTimeLeft = () => {
    const targetDate = new Date("2024-08-01T00:00:00"); // Maqsad sanani o'zgartiring
    const now = new Date();
    const difference = targetDate - now;

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const formatTime = (time) => (time < 10 ? `0${time}` : time);

  return (
    <>
      <div className="w-[100%] px-[10px]">
        <div className="w-[100%] h-[36px] m-auto mt-[40px] bg-[#140D2B] rounded-[6px] flex items-center justify-center gap-[5px]">
          <p className="text-[#fff] font-medium leading-[9.6px] font-poppins text-[12px] text-center">
            Festival Sale Ends In:
          </p>
          <div className="w-[121px] h-[26px] bg-white rounded-[3px] flex items-center justify-center">
            <p className="text-[#000] font-semibold leading-[9.6px] font-poppins text-[12px] text-center">
              {formatTime(timeLeft.days)}d:{formatTime(timeLeft.hours)}hrs:
              {formatTime(timeLeft.minutes)}mins
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Timer;
