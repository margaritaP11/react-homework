import React, { useContext } from 'react'
import { LanguageContext } from './Language'

const Text = () => {
  const { language } = useContext(LanguageContext)
  const texts = {
    ru: 'Привет! Это приложение с переключением языка.',
    en: 'Hello! This is a language-switching app.',
    de: 'Hallo! Dies ist eine Sprachwechsel-App.',
    fr: 'Bonjour ! Ceci est une application de changement de langue.',
    it: "Ciao! Questa è un'app per cambiare lingua.",
    el: 'Γεια σας! Αυτή είναι μια εφαρμογή αλλαγής γλώσσας.',
    zh: '你好！这是一个语言切换应用程序。',
  }

  return <p className="text">{texts[language]}</p>
}

export default Text
