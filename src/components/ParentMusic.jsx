import React, { Component } from 'react'
class ParentMusic extends Component {
  onChange = event => {
    const { value } = event.target
    this.props.editName(value)
  }

  levelUp = () => {
    this.props.editNumber(this.props.number + 1)
  }

  render () {
    return (
      <>
        <input type="text" value={this.props.name} onChange={this.onChange} />
        <button onClick={this.levelUp}>tăng</button>
      </>
    )
  }
}

export default ParentMusic
