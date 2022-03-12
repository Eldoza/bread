const React = require('react')
const Default = require('./layouts/Default')

function notFound () {
    return (
      <Default>
        <h1>Could not locate the bread you are looking for</h1>
        <h2>Please go back and try again</h2>
    </Default>
    )
}

module.exports = notFound