// Code DigitalClicker Component Here
import React, { PureComponent } from "react"

export default class DigitalClicker extends PureComponent {
  state = { timesClicked: 0 }

  handleClick = event => {
    // debugger
    // console.log(event)
    this.setState(updater => ({
      timesClicked: updater.timesClicked + 1
    }))
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>{this.state.timesClicked}</button>
      </div>
    )
  }
}
