import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Mundane Advanced Spoonbill</title>
        <meta property="og:title" content="Mundane Advanced Spoonbill" />
      </Helmet>
      <div className="home-container1">
        <span className="home-text">My model :D</span>
        <form className="home-form">
          <label>Give an instruction</label>
          <input type="text" placeholder="placeholder" className="input" />
          <button className="button">Button</button>
        </form>
      </div>
    </div>
  )
}

export default Home
