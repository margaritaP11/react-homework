import styles from './Question.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { answerQuestion } from '../../redux/questionnaireSlice'

const Question = ({ question }) => {
  const dispatch = useDispatch()
  const selected = useSelector(
    (state) =>
      state.questionnaire.questions.find((q) => q.id === question.id)?.answer
  )

  return (
    <div className={styles.question}>
      <p>{question.text}</p>
      {question.options.map((option) => (
        <label key={option}>
          <input
            type="radio"
            name={`question-${question.id}`}
            value={option}
            checked={selected === option}
            onChange={() =>
              dispatch(answerQuestion({ id: question.id, answer: option }))
            }
          />
          {option}
        </label>
      ))}
    </div>
  )
}

export default Question
