import { useState, useEffect } from 'react'
import { getRandomAdvice } from './services/advices'
import dividerDesktop from './assets/pattern-divider-desktop.svg'
import dividerMobile from './assets/pattern-divider-mobile.svg'
import dice from './assets/icon-dice.svg'
import './App.css'



function App() {
  const [advice, setAdvice] = useState({})

  useEffect(() => {
    getRandomAdvice().then(setAdvice) 
  },[]);

  const handleClick = () => {
    getRandomAdvice().then(setAdvice)
  }

  return (
  <main>
    <h1>advice #{advice.id}</h1>
    <p>"{advice.advice}"</p>
    <picture>
      <source media='(min-width:450px)' srcSet={dividerDesktop} />
      <img src={dividerMobile} alt='divider' />
    </picture>
    <button onClick={handleClick}>
      <img src={dice} alt='dice' />
    </button>

  </main>
  )
}

export default App
