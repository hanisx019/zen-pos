import React, { useState, useEffect } from "react";

const DateTime = () => {
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    const update = () => {
      const now = new Date();

      // Time: 12:38:23 (HH:mm:ss)
      const formattedTime =
        now.getHours().toString().padStart(2, "0") +
        ":" +
        now.getMinutes().toString().padStart(2, "0") +
        ":" +
        now.getSeconds().toString().padStart(2, "0");

      // Date: January 20, 2025
      const formattedDate = now.toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      });

      setTime(formattedTime);
      setDate(formattedDate);
    };

    update();
    const interval = setInterval(update, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col text-right leading-tight">
      <span className="text-2xl font-semibold ">{time}</span>
      <span className="text-xs text-gray-300 tracking-tighter text-center">{date}</span>
    </div>
  );
};

export default DateTime;
