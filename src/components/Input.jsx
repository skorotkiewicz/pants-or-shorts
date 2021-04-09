import React from "react";

const Input = ({
  city,
  setData,
  setCity,
  setLoading,
  setChange,
  getWeather,
}) => {
  return (
    <>
      <input
        type="text"
        placeholder={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button
        onClick={() => {
          getWeather(city, setData, setCity, setLoading);
          setLoading(true);
          setChange(false);
        }}
      >
        Change
      </button>
    </>
  );
};

export default Input;
