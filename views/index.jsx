const React = require('react')
const Default = require('./layouts/Default')

function Index ({ breads }) {
  console.log('BREADS THANG =>', breads)
    return (
      <Default>
        <h2>Index Page I am alive!</h2>

        <ul>
        {
          breads.map((bread, index)=> {
            return (
              <li key={index}>
                <a href={`/breads/${index}`}>
                  {bread.name}
                </a>
              </li>
            )
          })
        }
        </ul>
      </Default>
    )
}

module.exports = Index