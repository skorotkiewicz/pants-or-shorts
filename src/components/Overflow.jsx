import axios from "axios";
import { useState } from "react";
import Input from "./Input";
// import data from "./testData/data-cold.json";
// import data from "./testData/data-warm.json";
import Widget from "./Widget";

const getWeather = (setLoading, setData, setCity, setInit, city = null) => {
  setInit(true);
  setLoading(true);

  // For test data
  //   setData(data.current_condition[0]);
  //   setCity(data.nearest_area[0].areaName[0].value);
  //   setLoading(false);
  //   setInit(false);

  const localCity = localStorage.getItem("city");
  city = localCity ? localCity : null;

  const url = city
    ? `https://wttr.in/${city}?format=j1`
    : "https://wttr.in/?format=j1";

  axios.get(url).then((d) => {
    const city = d.data.nearest_area[0].areaName[0].value;

    setData(d.data.current_condition[0]);
    setCity(city);
    setLoading(false);
    setInit(false);
  });
};

const Overflow = () => {
  const [init, setInit] = useState(true);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(false);
  const [city, setCity] = useState("");
  const [change, setChange] = useState(false);

  return (
    <div className="container">
      <div className="board">
        <div className="app-header">
          <span>It is pants or shorts weather?</span>
        </div>
        <div className="app-main">
          {init && (
            <div
              className={`check ${loading ? "loading" : ""}`}
              onClick={() => {
                if (!loading) {
                  getWeather(setLoading, setData, setCity, setInit);
                }
              }}
            >
              {loading ? "Loading" : "Check"}
            </div>
          )}

          {data && !loading && <Widget data={data} />}
        </div>
        <div className="app-footer">
          {data && (
            <Input
              change={change}
              setCity={setCity}
              city={city}
              getWeather={getWeather}
              loading={loading}
              setLoading={setLoading}
              setData={setData}
              setInit={setInit}
              setChange={setChange}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Overflow;
