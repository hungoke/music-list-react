import React, { Component } from 'react'

class ParentMusic extends Component {

  constructor(props) {
    super(props)
    this.state = {
      newName: '',
      newNumber: 0
    }
  }

  onChange = event => {
    const { value } = event.target
    this.setState({
      newName: value
    })

    const name = this.state.newName

    this.props.editName(name)
  }

  levelUp = () => {
    this.setState({
      newNumber: this.state.newNumber + 1
    })

    this.props.editNumber(this.state.newNumber)
  }

  render () {
    return (
      <>
        <p>Hưng yêu {this.state.newName}</p>
        <input type="text" value={this.state.newName} onChange={this.onChange} />
        <button onClick={this.levelUp}>tăng</button>
        <p>total: {this.state.newNumber}</p>
      </>
    )
  }
}

export default ParentMusic
