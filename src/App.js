import React from 'react'
import ParentMusic from './components/ParentMusic'
class App extends React.Component {
  state = {
    name: 'trang',
    number: 0
  }

  editNewName = (value) => {
    this.setState({
      name: value
    })
  }

  editNewNumber = (value) => {
    this.setState({
      number: value
    })
  }

  render () {
    return (
      <div>
        <ParentMusic name={this.state.name} editNumber={this.editNewNumber} number={this.state.number} editName={this.editNewName}/>
      </div>
    )
  }
}

export default App
