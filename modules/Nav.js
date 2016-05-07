import React from 'react'
import { Link } from 'react-router'
import NavLink from './NavLink'

export default React.createClass({
  render() {
    return (
      <section className="header">
        <h1><Link to="/experiments/soup-recipe/">C. Arasin's Secret Soup</Link></h1>
        <nav className="nav-menu">
          <ul role="nav">
            <li><NavLink to="/experiments/soup-recipe/ingredients">Ingredients</NavLink></li>
            <li><NavLink to="/experiments/soup-recipe/instructions">Instructions</NavLink></li>
          </ul>
        </nav>
      </section>
    )
  }
})
