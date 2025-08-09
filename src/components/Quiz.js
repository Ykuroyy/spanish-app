import React, { useState } from 'react';
import { quizData } from '../data/quizData';
import './Quiz.css';

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);

  const handleAnswer = (answerIndex) => {
    setSelectedAnswer(answerIndex);
    setShowExplanation(true);
    
    if (answerIndex === quizData[currentQuestion].correct) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      setShowResult(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
    setSelectedAnswer(null);
    setShowExplanation(false);
  };

  if (showResult) {
    return (
      <div className="quiz-container result-container">
        <h2>クイズ終了！</h2>
        <div className="score-display">
          <p className="score-text">あなたのスコア</p>
          <p className="score-number">{score} / {quizData.length}</p>
        </div>
        <div className="result-message">
          {score >= 8 ? (
            <>
              <p className="excellent">素晴らしい！</p>
              <p>スペインについてよく知っていますね！</p>
              <p>きっとスペイン旅行を楽しめるでしょう！</p>
            </>
          ) : score >= 5 ? (
            <>
              <p className="good">よくできました！</p>
              <p>スペインの魅力を感じていただけましたか？</p>
              <p>実際に訪れてみたくなりましたね！</p>
            </>
          ) : (
            <>
              <p className="encourage">頑張りました！</p>
              <p>スペインにはまだまだ魅力がたくさん！</p>
              <p>もう一度チャレンジしてみましょう！</p>
            </>
          )}
        </div>
        <button className="restart-btn" onClick={handleRestart}>
          もう一度挑戦する
        </button>
      </div>
    );
  }

  const question = quizData[currentQuestion];

  return (
    <div className="quiz-container">
      <div className="progress-bar">
        <div 
          className="progress-fill" 
          style={{ width: `${((currentQuestion + 1) / quizData.length) * 100}%` }}
        />
      </div>
      
      <div className="question-header">
        <span className="question-number">問題 {currentQuestion + 1} / {quizData.length}</span>
        <span className="current-score">スコア: {score}</span>
      </div>

      <h2 className="question">{question.question}</h2>

      <div className="options">
        {question.options.map((option, index) => (
          <button
            key={index}
            className={`option-btn ${
              showExplanation 
                ? index === question.correct 
                  ? 'correct' 
                  : selectedAnswer === index 
                    ? 'incorrect' 
                    : 'disabled'
                : ''
            }`}
            onClick={() => !showExplanation && handleAnswer(index)}
            disabled={showExplanation}
          >
            {option}
          </button>
        ))}
      </div>

      {showExplanation && (
        <div className="explanation-box">
          <p className="explanation-title">
            {selectedAnswer === question.correct ? '正解！' : '残念！'}
          </p>
          <p className="explanation-text">{question.explanation}</p>
          <button className="next-btn" onClick={handleNext}>
            {currentQuestion < quizData.length - 1 ? '次の問題へ' : '結果を見る'}
          </button>
        </div>
      )}
    </div>
  );
};

export default Quiz;