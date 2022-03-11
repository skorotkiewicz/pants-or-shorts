import "./App.scss";
import Overflow from "./components/Overflow";

function App() {
  return (
    <div className="App">
      <header>
        <div>
          The app helps you decide what to wear. It tells you if it is going to
          be sunny, cloudy, or rainy. You can choose between pants or shorts
          depending on the weather.
        </div>
      </header>
      <main>
        <Overflow />
      </main>
      <footer>
        <div>
          <p>
            Based on an idea from Casey Dulson{" "}
            <a
              href="https://twitter.com/Casey_LeighD/status/1380176301261254658"
              target="_blank"
              rel="noreferrer"
            >
              @Casey_LeighD
            </a>
          </p>

          <p>
            &quot;I wish there was an app which could tell you if it is pants or
            shorts weather.&quot;
          </p>
        </div>

        <div>Weather data are fetched from the wttr.in website</div>
      </footer>
    </div>
  );
}

export default App;
