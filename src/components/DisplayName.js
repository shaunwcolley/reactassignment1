import React, { Component } from 'react';

export class DisplayName extends Component {
  render(){
    return (
      <h4>Hello {this.props.firstName}{this.props.lastName}</h4>
    )
  }
}
