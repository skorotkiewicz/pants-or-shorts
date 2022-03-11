import Shorts from "./../images/shorts.svg";
import Pants from "./../images/pants.svg";

const Widget = ({ data }) => {
  let short = false;
  let sunny = false;

  let fl = data.FeelsLikeC;
  let ws = data.windspeedKmph;
  let wd = data.weatherDesc;

  // eslint-disable-next-line array-callback-return
  wd.map((e) => {
    if (e.value === "Sunny") {
      sunny = true;
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
      <div className="desc">
        <h2>
          {wd[0] ? wd[0].value : ""} {fl} &deg;C
        </h2>
        <h1>{short ? "It's Shorts Weather" : "It's Pants Weather"}</h1>
      </div>
      <div className={`icons ${short ? "reverse" : ""}`}>
        <img
          width="100"
          height={short ? "100" : "150"}
          src={Pants}
          alt="pants"
          style={{ opacity: short ? 0.2 : 1 }}
        />
        <img
          width="100"
          height={short ? "100" : "50"}
          src={Shorts}
          alt="shorts"
          style={{ opacity: short ? 1 : 0.2, marginBottom: 100 }}
        />
      </div>

      <div className="fl">
        Feels like: {fl} &deg;C | Windspeed: {ws} Km/h
      </div>
    </div>
  );
};

export default Widget;
