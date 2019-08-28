// Code YouTubeDebugger Component Here
import React, { PureComponent } from "react"

export default class YouTubeDebugger extends PureComponent {
  state = {
    errors: [],
    user: null,
    settings: {
      bitrate: 8,
      video: {
        resolution: "1080p"
      }
    }
  }

  handleClick = event => {
    this.setState({
      settings: { ...this.state.settings, bitrate: 12 }
    })
  }

  handleClick2 = event => {
    this.setState({
      settings: {
        ...this.state.settings,
        video: { ...this.state.settings.video, resolution: "720p" }
      }
    })
  }

  render() {
    return (
      <div>
        <button className="bitrate" onClick={this.handleClick}>
          {this.state.settings.bitrate}
        </button>
        <button className="resolution" onClick={this.handleClick2}>
          {this.state.settings.video.resolution}
        </button>
      </div>
    )
  }
}
