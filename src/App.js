import React from "react";
import "./App.css";
import { ThemeProvider } from "./components/contexts/themeContext";
import AnimatedCursor from "react-animated-cursor";
import MainRouter from "./routes/MainRouter";

function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <MainRouter />
        <AnimatedCursor
          innerSize={20}
          outerSize={20}
          color="193, 11, 111"
          outerAlpha={0.2}
          innerScale={0.7}
          outerScale={5}
          clickables={[
            "a",
            'input[type="text"]',
            'input[type="email"]',
            'input[type="number"]',
            'input[type="submit"]',
            'input[type="image"]',
            "label[for]",
            "select",
            "textarea",
            "button",
            ".link",
            {
              target: ".custom",
              options: {
                innerSize: 12,
                outerSize: 12,
                color: "255, 255, 255",
                outerAlpha: 0.3,
                innerScale: 0.7,
                outerScale: 5,
              },
            },
          ]}
        />
      </ThemeProvider>
    </div>
  );
}

export default App;
