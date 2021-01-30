import React from 'react'
import { Link } from 'react-router-dom'
import BodyComp from './BodyComp'
import "./HomeStyle.css"

function HomeScreen() {
  return (
    <div className="Maindiv">
      <div className="HomeWrapper">
        <Link to= "/" className="linkdiv">Home</Link>
        <Link to= "/usecase" className="linkdiv">Use Case</Link>
        <Link to ="/feedback" className="linkdiv">Feed back</Link>
      </div>
     
    </div>
  )
}

export default HomeScreen
