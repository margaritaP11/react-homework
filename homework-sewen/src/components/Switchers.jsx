import React, { useContext } from 'react'
import { LanguageContext } from './Language'

const Switchers = () => {
  const { language, setLanguage } = useContext(LanguageContext)

  return (
    <select
      value={language}
      onChange={(e) => setLanguage(e.target.value)}
      className="switcher"
    >
      <option value="re">Русский</option>
      <option value="en">English</option>
      <option value="de">Deutsch</option>
      <option value="fr">Français</option>
      <option value="it">Italiano</option>
      <option value="el">Ελληνικά</option>
      <option value="zh">中文</option>
    </select>
  )
}

export default Switchers
