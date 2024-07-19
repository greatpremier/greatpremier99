import React from 'react'
import Name from './name/Name'
import Surname from './name/Surname'

const name = 'Tanks'
const amount = 500.00
const spendDate = new Date("2024-11-28")
const category = 'Amoured vehicle'

class App extends React.Component {
  render() {
    return (
      <div>
      <a
      className="App-link"
      href="https://reactjs.org"
      target="_blank"
      rel="noopener noreferrer"
    >
      Learn React
    </a>
    <Name
    name = {name}
    amount = {amount}
    spendDate = {spendDate}
    category = {category} /> 
    </div>
    )
  }
}

export default App;
