const React = require('react')
const Default = require('./layouts/Default')

function Index ({ breads }) {
  console.log('BREADS THANG =>', breads)
    return (
      <Default>
        <h2>Index Page I am alive!</h2>
        <div className="newButton">
  <a href="/breads/new"><button>Add a new bread</button></a>
</div>
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