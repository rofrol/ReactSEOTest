import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  componentDidMount: function() {
    document.title = "Ingredients | Chris Arasin's Secret Soup";
  },
  render: function() {
    return (
      <div>
        <h1>Ingredients</h1>
        <p className="intro">The finest of combinations.</p>
        <ul>
          <li>1 Chicken</li>
          <li>3 Potatoes</li>
          <li>3 Branches of Rosemary</li>
          <li>1 lb. White Beans</li>
          <li>1 lb. Italian Sausage</li>
          <li>1 T. Oregano</li>
          <li>1 T. Parsley</li>
          <li>3 T. Sriracha</li>
          <li>3 Beets</li>
          <li>Salt</li>
          <li>Pepper</li>
        </ul>
        <Link to='/experiments/soup-recipe/instructions'>Read the instructions</Link><br />
        <Link to='/experiments/soup-recipe/'>Back to home</Link>
      </div>
    )
  }
})
