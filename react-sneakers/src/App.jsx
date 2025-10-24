import './App.css'
import { Routes, Route } from 'react-router-dom'

import { CartPage, NewsPage, HomePage } from './pages'
import { Header } from './components/Header/Header'
import { Footer } from './components/Footer/Footer'

function App() {
  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}
    >
      <Header />
      <main style={{ flexGrow: 1, height: '100%' }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/news" element={<NewsPage />} />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}

export default App
