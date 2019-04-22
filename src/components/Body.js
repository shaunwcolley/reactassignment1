import React, { Component } from 'react';
import '../custom.css'

export class Body extends Component {
  render() {
    return (
      <div className="content-blocks">
        <h3>
          {this.props.title}
        </h3>
        <p className="p-font">
          {this.props.content}
        </p>
        <div className="orange-bar">
          <p className="inline-text"> {this.props.commentCount} comments</p>
          <p className="inline-text"> {this.props.likeCount} likes</p>
        </div>
      </div>
          )
  }
}
