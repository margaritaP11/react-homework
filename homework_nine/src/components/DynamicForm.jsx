import React, { useState } from 'react'
import styles from './DynamicForm.module.css'
import { useForm } from 'react-hook-form'

const DynamicForm = () => {
  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors },
  } = useForm()

  const [schowSecond, setSchowSecond] = useState(false)

  const handleFirstSubmit = async (e) => {
    e.preventDefault()
    const isValid = await trigger('firstInput')
    if (isValid) {
      setSchowSecond(true)
    }
  }
  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <form
      onSubmit={schowSecond ? handleSubmit(onSubmit) : handleFirstSubmit}
      className={styles.form}
    >
      <label className={styles.lable}>First Field</label>
      <input
        {...register('firstInput', { required: true, minLength: 5 })}
        placeholder="Введите текст"
        className={styles.input}
      />
      {errors.firstInput && (
        <span className={styles.errors}>Минимум 5 символов</span>
      )}
      {schowSecond && (
        <>
          {' '}
          <label className={styles.lable}>Second Field</label>
          <input
            {...register('secondInput', { required: true, minLength: 5 })}
            placeholder="Введите текст"
            className={styles.input}
          />
        </>
      )}
      <button className={styles.button} type="submit">
        Submit
      </button>
    </form>
  )
}

export default DynamicForm
