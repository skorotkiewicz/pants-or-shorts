import React from "react";

const Widget = ({ data }) => {
  let short = false;
  let sunny = false;
  let desc = "";

  let fl = data.FeelsLikeC;
  let ws = data.windspeedKmph;
  let wd = data.weatherDesc;

  // eslint-disable-next-line array-callback-return
  wd.map((e) => {
    if (e.value === "Sunny") {
      sunny = true;
      desc += e.value;
    }
  });

  if (fl > 5 && ws < 1) {
    short = true;
  } else if (fl > 10 && ws < 19) {
    short = true;
  } else if (fl > 20 && ws < 28) {
    short = true;
  } else if (fl > 12 && ws < 28 && sunny) {
    short = true;
  } else {
    short = false;
  }

  return (
    <div className="widget">
      <h2>{sunny ? "Sunny" : desc}</h2>
      <h1 className="pants">
        {short ? "Is shorts weather" : "Is pants weather"}
      </h1>
      <div className="fl">
        Feels like: {fl} &deg;C | Windspeed: {ws} Km/h
      </div>
    </div>
  );
};

export default Widget;
