import React, { useState } from 'react'
import styles from './CitySelector.module.css'
import CityCard from '../CityCard/CityCard'

export const CitySelector = () => {
  const citiesData = [
    {
      name: 'Токио',
      description:
        'Столица Японии, известная своими неоновыми огнями, многолюдностью и современной архитектурой.',
      imageUrl:
        'https://www.topmagazine.cz/wp-content/uploads/2021/06/tokio-1024x576.jpg',
      facts: [
        'Токио - самый населенный мегаполис в мире.',
        'Здесь расположена самая высокая башня в Японии - Токийская башня.',
        'В Токио проходят множество культурных событий и фестивалей.',
      ],
    },
    {
      name: 'Киото',
      description:
        'Город на острове Хонсю, известный своими многочисленными классическими буддийскими храмами...',
      imageUrl:
        'https://teletype.in/files/a4/99/a4990a73-5fa4-4549-9725-3f6f52d1e534.jpeg',
      facts: [
        'В Киото насчитывается более 1600 буддийских храмов.',
        'Этот город был столицей Японии более тысячи лет.',
      ],
    },
    {
      name: 'Осака',
      description:
        'Город в центральной части острова Хонсю, известен своими современными достопримечательностями...',
      imageUrl: 'https://japan.org.ua/images/cities/osaka/osaka_1.jpg',
      facts: [
        'Осака известна своим замком, который играл ключевую роль в объединении Японии в XVI веке.',
        'Город является кулинарной столицей Японии.',
      ],
    },
    {
      name: 'Хоккайдо',
      description:
        'Самый северный остров Японии, известный своей природой, снежными фестивалями и уникальной культурой.',
      imageUrl:
        'https://undergroundexpert.info/wp-content/uploads/2021/01/Hokkaido1.jpg',
      facts: [
        'Хоккайдо предлагает отличные условия для зимних видов спорта.',
        'Летом остров привлекает туристов своими цветущими лавандовыми полями.',
      ],
    },
    {
      name: 'Нагоя',
      description:
        'Город в центре Хонсю, известен своим отраслевым влиянием и историческими достопримечательностями.',
      imageUrl:
        'https://www.jalan.net/jalan/images/pict3L/Y1/Y329551/Y329551055.jpg',
      facts: [
        'Нагоя — центр автомобилестроения.',
        'Здесь находится Нагойский замок с позолоченными дельфинами.',
      ],
    },
  ]

  const [selectedCity, setSelectedCity] = useState(citiesData[0])
  const [isOpen, setIsOpen] = useState(false)

  const handleSelect = (city) => {
    setSelectedCity(city)
    setIsOpen(false)
  }

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Путeшествие по городам Японии</h1>

      <div className={styles.dropdown}>
        <div className={styles.selected} onClick={() => setIsOpen(!isOpen)}>
          {selectedCity.name}
          <span className={styles.arrow}>{isOpen ? '▲' : '▼'}</span>
        </div>
        {isOpen && (
          <ul className={styles.options}>
            {citiesData.map((city) => (
              <li
                key={city.name}
                className={styles.option}
                onClick={() => handleSelect(city)}
              >
                {city.name}
              </li>
            ))}
          </ul>
        )}
      </div>
      <CityCard city={selectedCity} />
    </div>
  )
}
