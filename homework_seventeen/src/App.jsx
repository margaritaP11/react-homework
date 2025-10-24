import { useState } from 'react'
import { ThemeProvider } from '@emotion/react'
import CssBaseline from '@mui/material/CssBaseline'
import Typography from '@mui/material/Typography'
import { lightTheme, darkTheme } from './theme/themes'
import ThemeToggle from './components/ThemeToggle'
import './App.css'

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const currentTheme = isDarkMode ? darkTheme : lightTheme

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev)
  }

  return (
    <ThemeProvider theme={currentTheme}>
      <CssBaseline />
      <div style={{ padding: '40px' }}>
        <Typography>{isDarkMode ? 'Light Mode' : 'Dark Mode'}</Typography>
        <ThemeToggle isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      </div>
    </ThemeProvider>
  )
}

export default App
