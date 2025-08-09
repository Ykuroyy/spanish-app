import React, { useState } from 'react';
import Quiz from './components/Quiz';
import './App.css';

function App() {
  const [showQuiz, setShowQuiz] = useState(false);

  return (
    <div className="App">
      <header className="app-header">
        <div className="flag-decoration">
          <span className="flag-stripe red"></span>
          <span className="flag-stripe yellow"></span>
          <span className="flag-stripe red"></span>
        </div>
        <h1 className="app-title">¡Vamos a España!</h1>
        <p className="app-subtitle">スペイン入門クイズ</p>
      </header>

      {!showQuiz ? (
        <div className="welcome-container">
          <div className="welcome-card">
            <h2>スペインの魅力を発見しよう！</h2>
            <div className="feature-list">
              <div className="feature-item">
                <span className="feature-icon">🏛️</span>
                <p>世界遺産について学ぼう</p>
              </div>
              <div className="feature-item">
                <span className="feature-icon">💃</span>
                <p>スペイン文化を知ろう</p>
              </div>
              <div className="feature-item">
                <span className="feature-icon">🗣️</span>
                <p>簡単なスペイン語を覚えよう</p>
              </div>
              <div className="feature-item">
                <span className="feature-icon">🥘</span>
                <p>美味しい料理を発見しよう</p>
              </div>
            </div>
            <p className="quiz-description">
              10問のクイズでスペインの基本を楽しく学びましょう！<br/>
              きっとスペインに行きたくなるはず！
            </p>
            <button className="start-btn" onClick={() => setShowQuiz(true)}>
              クイズを始める
            </button>
          </div>
        </div>
      ) : (
        <div className="quiz-wrapper">
          <Quiz />
        </div>
      )}

      <footer className="app-footer">
        <p>© 2024 スペイン入門クイズアプリ</p>
      </footer>
    </div>
  );
}

export default App;