import React from 'react'
import ReactLogo from '../img/react-logo.png'

const navbar = () => {
  return (
      <nav>
        <img src={ReactLogo} />
        <h3>ReactFacts</h3>
        <h4>React Course - Project 1</h4>
      </nav>
  )
}

export default navbar