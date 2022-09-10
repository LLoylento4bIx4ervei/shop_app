import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from "axios"
import { Card } from './components/Card';



function App() 
{ 
  const[games,setGames]=useState([])
  useEffect(
    ()=>{
      axios.get("http://127.0.0.1:8000/games").then((response)=>{
        setGames(response.data)
      })

    },[]
  )
//   return (<div className='games'>{games.map((game)=>{
    
//     return( 
//       <div className='game-name'>
//       <div>{game.Name}</div>
      
//       <div className='game-description'>
//       <div>{game.Description}</div>
      
//       <div className='game-price'>
//       <div>{game.Price}</div>
      
      
//       </div>
      
//   )})}</div>);
const[cards,setCards]=useState(
  [{id:1,
  name:'Dota 2',
  description:'Dota 2 is a 2013 multiplayer online battle arena (MOBA)',
  price:'Free',
  
  rating:'4.0',
  img:'https://icon-library.com/images/dota-2-icon/dota-2-icon-28.jpg'  
},{id:2,
  name:'Far Cry 3',
  description:'Far Cry 3 is a first-person shooter set on the fictional Rook Islands, a tropical archipelango somewhere in the Pacific',
  price:'19.99$',
  rating:'9',
  img:'https://upload.wikimedia.org/wikipedia/en/c/c6/Far_Cry_3_PAL_box_art.jpg'}]
) 
// const array = [1,2,3,4]
// console.log(array.map((arrayitem)=>{
//   return arrayitem*arrayitem
// }))

return(
  // Glavnoe dermishe
  <div className='gameContainer' id='gameContainer'>
    {/* <Card/> */}
    {/* <Card name='Dota 2'
    description='Dota 2 is a 2013 multiplayer online battle arena (MOBA) 
    video game developed and published by Valve.'
    img='https://icon-library.com/images/dota-2-icon/dota-2-icon-28.jpg'
    price='Free'
    rating='4.0'/> */}
    {/* {[Card(cards[0]),Card(cards[1])]} */}
    {cards.map((cardsitem)=>{
      return Card(cardsitem)
    })}
  </div>
  )
}

export default App;
