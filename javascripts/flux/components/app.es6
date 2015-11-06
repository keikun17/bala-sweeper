import React from 'react'
import _ from 'lodash'
import Cell from './cell'

export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {bullets_remaining: 1}
  }

  cells() {
    var cells = []

    _.times(42, () => {
      cells.push(<Cell />)
    })

    return cells
  }

  render() {
    return <app>
      <bullet_counter>Bullets Remaining : { this.state.bullets_remaining }!</bullet_counter>
      <grid>
        { this.cells() }

      </grid>
    </app>
  }
}
