import React from 'react'
import { Link } from 'react-router'


export default React.createClass({
  componentDidMount: function() {
    document.title = "Chris Arasin\'s Secret Soup Recipe";
  },
  render: function() {
    return (
      <div>
        <h1>Chris Arasin's Secret Soup Recipe</h1>
        <p className="intro">
          More than just soup, it's soup-er. 
        </p>
        <img src="./img/chris-arasins-soup.jpg" alt="A bowl of Chris Arasin's Secret Soup" width="344" height="330" />
        <p>
          Held secret for years, this recipe for Chris Arasin's soup has finally been released to the public.
          This soup is made only from local, grass-fed whatever, and gluten-free, non GMO whatever else.
        </p>
        <p>I hope you enjoy!</p>
        <p>
          <Link to="/experiments/soup-recipe/ingredients">View the ingredients</Link><br />
          <Link to="/experiments/soup-recipe/instructions">Read the instructions</Link>
        </p>
      </div>
    )
  }
})
