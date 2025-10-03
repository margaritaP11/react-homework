import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Articles from './pages/Articles'
import ArticleDetail from './pages/ArticleDetail'

function App() {
  return (
    <BrowserRouter>
      <nav>
        <NavLink to="/"> Главная</NavLink> | {''}
        <NavLink to="/articles"> Статьи</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/articles/:id" element={<ArticleDetail />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
