import React, { useState, useEffect } from 'react'
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi'
import { FaArrowLeft, FaArrowRight, FaQuoteRight } from 'react-icons/fa'
import data from './data'
function App() {
  const [people, setPeople] = useState(data)
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (index < 0) {
      setIndex(people.length - 1)
    } else if (index >= people.length) {
      setIndex(0)
    }
  }, [index, people])

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1)
    }, 3000)
    return () => clearInterval(slider)
  }, [index])
  return (
    <section className='section'>
      <div className='title'>
        <h2>/Reviews</h2>
      </div>

      <div className='section-center'>
        {people.map((p, pIndex) => {
          const { id, image, name, title, quote } = p
          let position = 'nextSlide'
          if (pIndex === index) {
            position = 'activeSlide'
          }
          if (
            pIndex === index - 1 ||
            (index === 0 && pIndex === people.length - 1)
          ) {
            position = 'lastSlide'
          }

          return (
            <article className={position} key={id}>
              <img src={image} alt={name} className='person-img' />
              <h4 className='author'>{name}</h4>
              <p className='job'>{title}</p>
              <p className='info'>{quote}</p>
              <FaQuoteRight />
            </article>
          )
        })}
        <button className='prev' onClick={() => setIndex(index - 1)}>
          <FiChevronLeft />
        </button>
        <button className='next' onClick={() => setIndex(index + 1)}>
          <FiChevronRight />
        </button>
      </div>
    </section>
  )
}

export default App
