import React from "react";
import "./App.css";
import { ThemeProvider } from "./components/contexts/themeContext";
import MainRouter from "./routes/MainRouter";

function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <MainRouter />
      </ThemeProvider>
    </div>
  );
}

export default App;
