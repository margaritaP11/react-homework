import { styled } from '@mui/material/styles'

const ToggleButton = styled('button')(({ theme }) => ({
  padding: '10px 20px',
  fontSize: '16px',
  backgroundColor: theme.palette.primary.main,
  border: 'none',
  borderRadius: '6px',
  cursor: 'pointer',
  transition: 'background-color 0.3s ease',
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
  },
}))
function ThemeToggle({ toggleTheme }) {
  return <ToggleButton onClick={toggleTheme}>Toggle Theme</ToggleButton>
}
export default ThemeToggle
