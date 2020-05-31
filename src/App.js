import React from "react";
import "./App.css";
import Sidebar from "./components/sidebar";
import Introduction from "./components/introduction";
import About from "./components/about";
import Timeline from "./components/timeline";

function App() {
  const [darkMode, setDarkMode] = React.useState(getInitialMode());
  React.useEffect(() => {
    localStorage.setItem("dark", JSON.stringify(darkMode));
  }, [darkMode]);

  function getInitialMode() {
    const isReturningUser = "dark" in localStorage;
    const savedMode = JSON.parse(localStorage.getItem("dark"));
    const userPrefersDark = getPrefColorScheme();
    // if mode was saved --> dark / light
    if (isReturningUser) {
      return savedMode;
      // if preferred color scheme is dark --> dark
    } else if (userPrefersDark) {
      return true;
      // otherwise --> light
    } else {
      return false;
    }
    // return savedMode || false;
  }

  function getPrefColorScheme() {
    if (!window.matchMedia) return;

    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  }

  return (
    <div id="colorlib-page" className={darkMode ? "dark-mode" : "light-mode"}>
      <div className="toggle-container">
        <div
          className="toggle"
          onClick={() => setDarkMode((prevMode) => !prevMode)}
          style={{ color: darkMode ? "grey" : "yellow" }}
        >
          ☀︎ Light
        </div>
        <div> | </div>
        <div
          className="toggle"
          onClick={() => setDarkMode((prevMode) => !prevMode)}
          style={{ color: darkMode ? "slateblue" : "grey" }}
        >
          ☾ Dark
        </div>
      </div>

      <div id="container-wrap">
        {<Sidebar></Sidebar>}
        <div id="colorlib-main">
          <Introduction></Introduction>
          <About></About>
          <Timeline></Timeline>
        </div>
      </div>
    </div>
  );
}

export default App;
