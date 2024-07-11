import { useState } from "react";
import "./QuizChallenge.scss";
import { quiz } from "./quiz";

export const QuizChallenge = () => {
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(false);
  const [choiceIndex, setChoiceIndex] = useState(-1);
  const [result, setResult] = useState({
    correctAnswer: 0,
    wrongAnswer: 0,
    score: 0,
  });
  const [showResult, setShowResult] = useState(false);
  const { question, choices , correctAnswer } = quiz.questions[activeQuestion];

  // const backBtnClick = () => {
  //   console.log("backBtnClick");
  //   setActiveQuestion((preState) => preState - 1);
  // };

  const nextBtnClick = () => {
    if (activeQuestion + 1 < quiz.questions.length) {
      setActiveQuestion((preState) => preState + 1);
    }
    setResult((preState) =>
      selectedAnswer
        ? {
            ...preState,
            correctAnswer: preState.correctAnswer + 1,
            score: preState.score + 5,
          }
        : {
            ...preState,
            wrongAnswer: preState.wrongAnswer + 1,
          }
    );
    if (activeQuestion + 1 === quiz.questions.length) {
      setShowResult(true);
    }
    setChoiceIndex(-1);
  };

  const onSelectAnswer = (answer, index) => {
    setChoiceIndex(index);
    if (answer === correctAnswer) {
      setSelectedAnswer(true);
      console.log("right");
    } else {
      setSelectedAnswer(false);
      console.log("wrong");
    }
  };

  return (
    <div className="quiz-body">
      <div className="quiz-container">
        {showResult ? (
          <div>
            <h1>Result</h1>
            <ul>
              {Object.entries(result).map((el) => {
                return (
                  <li key={el[0]}>
                    <b>{el[0]}</b>: {el[1]}
                  </li>
                );
              })}
            </ul>
          </div>
        ) : (
          <div>
            <div className="question">
              <p>
                {activeQuestion + 1}
                <span>/04</span>
              </p>
              <h3>{question}</h3>
            </div>
            <div className="options">
              <ul>
                {choices.map((choice, index) => {
                  return (
                    <li
                      key={`choice_${index}`}
                      className={`${choiceIndex === index ? "checked" : ""}`}
                      onClick={() => onSelectAnswer(choice, index)}
                    >
                      {choice}
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="action-container">
              {/* <button className="back-btn" onClick={backBtnClick}>
            Back
          </button> */}
              <button className="next-btn" onClick={nextBtnClick}>
                {quiz.questions.length === activeQuestion + 1
                  ? "Submit"
                  : "Next"}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
