import { useRef } from "react";

const Input = ({
  change,
  setCity,
  city,
  getWeather,
  loading,
  setLoading,
  setData,
  setInit,
  setChange,
}) => {
  const inRef = useRef();

  return (
    <>
      <div>
        {change ? (
          <>
            <input
              type="text"
              placeholder="Your city (>1 characters)"
              onChange={(e) => setCity(e.target.value)}
              ref={inRef}
            />
            <button
              onClick={() => {
                if (city.length > 1 && inRef.current && inRef.current.value) {
                  localStorage.setItem("city", city);
                  getWeather(setLoading, setData, setCity, setInit, city);
                  setChange(false);
                }
              }}
              title="Get weather"
            >
              Get
            </button>

            <button onClick={() => setChange(false)} title="Cancel">
              x
            </button>
          </>
        ) : (
          <>
            {!loading && (
              <div>
                Weather for <strong>{city}</strong>, not your city?
                <span onClick={() => setChange(true)}>Change</span>
              </div>
            )}
          </>
        )}
      </div>
    </>
  );
};

export default Input;
