import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
const ArticleDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const articles = {
    1: 'React — это библиотека для создания пользовательских интерфейсов.',
    2: 'Хуки позволяют использовать состояние и другие возможности React без написания классов.',
  }
  const articleText = articles[id] || 'Нет статьи'
  return (
    <div>
      <h1>Статья #{id}</h1>
      <p> {articleText}</p>
      <button onClick={() => navigate('/articles')}>Назад</button>
    </div>
  )
}

export default ArticleDetail
