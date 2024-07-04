"use client";

import MeetingTypeList from "@/components/MeetingTypeList";
import React, { useEffect, useState } from "react";

const Home = () => {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {

    setNow(new Date());

    const interval = setInterval(() => {
      setNow(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const time = now?.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
  const date = now ? new Intl.DateTimeFormat("en-US", {
    dateStyle: "full",
  }).format(now) : "";

  return (
    <section className="flex size-full flex-col gap-10 text-white ">
      <h1 className="text-3xl font-bold ">
        <div className="h-[300px] w-full rounded-[20px] bg-hero bg-cover ">
          <div className="flex h-full flex-col justify-between max-md:px-5 max-md:py-8 lg:p-11 ">
            <h2 className="glassmorphism max-w-[270px] rounded py-2 text-center text-base font-normal ">
              Upcoming Meeting at 11:00 AM
            </h2>
            <div className="flex flex-col gap-2 ">
              <h1 className="text-4xl font-extrabold lg:text-7xl">{time}</h1>
              <p className="text-lg font-medium text-sky-1 lg:text-2xl">
                {date}
              </p>
            </div>
          </div>
        </div>
      </h1>
      <MeetingTypeList/>
    </section>
  );
};

export default Home;
