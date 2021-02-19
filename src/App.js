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
        <p>hưng yêu {this.state.name}</p>
        <p>total: {this.state.number}</p>
        <ParentMusic name={this.state.name} editNumber={this.editNewNumber} number={this.state.number} editName={this.editNewName}/>
      </div>
    )
  }
}

export default App
