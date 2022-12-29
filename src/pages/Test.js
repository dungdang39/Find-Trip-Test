import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Parser from "html-react-parser";

import ProgressBar from "react-bootstrap/ProgressBar";

const Test = ({ contents }) => {
  const [questionNum, setQuestionNum] = useState(0);
  const [totalScore, setTotalScore] = useState(0);

  const navigate = useNavigate();

  const handleClick = (score) => {
    setTotalScore(totalScore + score);

    if (questionNum < contents.length - 1) {
      setQuestionNum(questionNum + 1);
    } else {
      const type = () => {
        if (totalScore > 28) {
          return 4;
        }
        if (totalScore > 24) {
          return 3;
        }
        if (totalScore > 18) {
          return 2;
        } else {
          return 1;
        }
      };
      navigate(`/result/${type()}`);
    }
  };

  return (
    <div className="Test">
      <ProgressBar
        variant="warning"
        now={((questionNum + 1) / contents.length) * 100}
      />
      <h1>{Parser(contents[questionNum].question_title)}</h1>
      {contents[questionNum].answers.map((it, idx) => (
        <button
          className="answerBtn"
          key={idx}
          onClick={() => handleClick(it.score)}
        >
          {Parser(it.text)}
        </button>
      ))}
    </div>
  );
};

export default Test;
