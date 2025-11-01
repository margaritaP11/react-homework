import styles from './App.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { submitAnswers } from './redux/questionnaireSlice'
import Question from './components/Question/Question'
import Result from './components/Result/Result'

function App() {
  const dispatch = useDispatch()
  const { questions, submitted } = useSelector((state) => state.questionnaire)

  const allAnswered = questions.every((q) => q.answer !== null)
  return (
    <div className={styles.app}>
      <h1>Questionnaire</h1>
      {!submitted ? (
        <>
          {questions.map((q) => (
            <Question key={q.id} question={q} />
          ))}
          <button
            className={styles.submit}
            onClick={() => dispatch(submitAnswers())}
            disabled={!allAnswered}
          >
            Submit
          </button>
        </>
      ) : (
        <Result />
      )}
    </div>
  )
}

export default App
