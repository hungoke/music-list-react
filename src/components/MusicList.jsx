import React, { Component} from 'react'
import { musicList } from './../mockData/musics'

class MusicList extends Component {
  state = {
    musicList
  }

  get music() {
    const list = []

    this.state.musicList.forEach((item, index) => {
      const li = (
        <li key={index}>
          <p>Title: {item.title}</p>
          <p>Name: {item.name}</p>
          <p>Time: {item.time}</p>
        </li>
      )

      list.push(li)
    })

    return list
  }

  render () {
    return (
      <>
        {this.music}
      </>
    )
  }
}

export default MusicList
