import styles from './Result.module.css'
import { useSelector } from 'react-redux'

const Result = () => {
  const question = useSelector((state) => state.questionnaire.questions)

  return (
    <div className={styles.result}>
      <h2>Results:</h2>
      <ul>
        {question.map((q) => (
          <li key={q.id}>
            <strong>{q.text}</strong> — <em>{q.answer || 'No answer'}</em>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Result
