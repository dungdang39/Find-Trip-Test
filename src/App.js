import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Reset } from "styled-reset";

import Home from "./pages/Home";
import Test from "./pages/Test";
import Result from "./pages/Result";
import QuestionList from "./components/QuestionList";
import ResultList from "./components/ResultList";

function App() {
  return (
    <BrowserRouter>
      <Reset />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/test" element={<Test contents={QuestionList} />} />
          <Route
            path="/result/:id"
            element={<Result resultEl={ResultList} />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
