import React from 'react'
import { Link } from 'react-router-dom'

const Articles = () => {
  const articles = [
    {
      id: '1',
      title: 'Cтатья 2',
    },
    { id: '2', title: 'Содержание статьи 2' },
  ]
  return (
    <div>
      <h1>Список статей</h1>
      <ul>
        {articles.map((article) => (
          <li key={article.id}>
            <Link to={`${article.id}`}>{article.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Articles
