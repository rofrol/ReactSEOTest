import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  componentDidMount: function() {
    document.title = "Instructions | Chris Arasin's Secret Soup";
  },
  render: function() {
    return (
      <div>
        <h1>Instructions</h1>
        <p className="intro">"Always start out with a larger pot than what you think you need." &mdash; Julia Child</p>
        <ol>
          <li>Fill a large pot with water.</li>
          <li>Put the chicken in the pot, along with all the dry herbs.</li>
          <li>Let simmer for an hour</li>
          <li>Meanwhile, prepare the remaining ingredients</li>
          <li>Put everything in the pot</li>
          <li>Let the soup simmer for 4 hours.</li>
        </ol>
        <Link to='/experiments/soup-recipe/ingredients'>View the Ingredients</Link><br />
        <Link to='/experiments/soup-recipe/'>Back to home</Link>
      </div>
    )
  }
})
