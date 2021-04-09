import React, { useState, useEffect } from "react";
import Widget from "./Widget";
import Input from "./Input";

const getWeather = (city, setData, setCity, setLoading) => {
  fetch(`http://wttr.in/${city}?format=j1`)
    .then((res) => res.json())
    .then((data) => {
      setData(data.current_condition[0]);
      setCity(data.nearest_area[0].areaName[0].value);
      setLoading(false);
    });
};

const Weather = () => {
  const [city, setCity] = useState("");
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(true);
  const [change, setChange] = useState(false);

  useEffect(() => {
    // fetch("http://localhost:3000/test.json")
    fetch("http://wttr.in/?format=j1")
      .then((res) => res.json())
      .then((data) => {
        setData(data.current_condition[0]);
        setCity(data.nearest_area[0].areaName[0].value);
        setLoading(false);
      });
  }, []);

  return (
    <>
      {data && !loading ? <Widget data={data} /> : <h2>Please wait...</h2>}
      <div className="change">
        {!change && !loading && (
          <>
            {city} |
            <button
              onClick={() => {
                setChange(true);
              }}
            >
              Change City
            </button>
          </>
        )}

        {change && (
          <Input
            city={city}
            setData={setData}
            setCity={setCity}
            setLoading={setLoading}
            setChange={setChange}
            getWeather={getWeather}
          ></Input>
        )}
      </div>
    </>
  );
};

export default Weather;
