import React, {useState} from 'react'
import Board from './Board'
import logo from './images/logo.png'
import card1 from './images/crow.PNG'
import card2 from './images/Dragon_mother.PNG'
import card3 from './images/eddard.PNG'
import card4 from './images/evil_queen.PNG'
import card5 from './images/husband.PNG'
import card6 from './images/redwitch.PNG'
import card7 from './images/jon_snow.PNG'
import card8 from './images/not_today.PNG'
import './App.css'


function App() {
  
  const cards = buildCards()
  return (
    
      
    <div className="App">
      {/* <img src="https://cdn1.vox-cdn.com/assets/4229567/game-of-thrones-poster_85627-1920x1200.jpg" className="bg"/> */}
      <Board cards={cards} />
    </div>
    
  )
}




function buildCards() {
  let id = 0
  const images = {card1 ,card2 ,card3 , card4 , card5 , card6 , card7 , card8  }
  const cards = Object.keys(images).reduce((result, item) => {
    const getCard = () => ({
      id: id++,
      type: item,
      logo,
      frontImg: images[item],
      flipped: false,
    })
    return [...result, getCard(), getCard()]
  }, [])
  return suffle(cards)
}

function suffle(arr) {
  let len = arr.length
  for (let i = 0; i < len; i++) {
    let randomIdx = Math.floor(Math.random() * len)
    let copyCurrent = {...arr[i]}
    let copyRandom = {...arr[randomIdx]}
    arr[i] = copyRandom
    arr[randomIdx] = copyCurrent
  }
  return arr
}
export default App