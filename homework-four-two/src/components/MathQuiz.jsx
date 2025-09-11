import React, { useState } from 'react'
import Answer from './Answer'

const MathQuiz = () => {
  const [a, setA] = useState(generateNumber())
  const [b, setB] = useState(generateNumber())
  const [score, setScore] = useState(0)

  function generateNumber() {
    return Math.floor(Math.random() * 10) + 1
  }

  const updatePoints = (userAnswer) => {
    const correctAnswer = a + b
    if (parseInt(userAnswer) === correctAnswer) {
      setScore(score + 1)
    } else {
      setScore(score - 1)
    }
    setA(generateNumber())
    setB(generateNumber())
  }

  return (
    <div className="App">
      <h1 className="title">Math Quiz</h1>
      <h2 className="quiz">
        Сколько будет: {a} + {b}?
      </h2>
      <p className="count">Ваш счёт: {score}</p>
      <Answer updatePoints={updatePoints} />
    </div>
  )
}

export default MathQuiz
