import React, { Component } from 'react';
import './App.css';
import {Menu} from './components/Menu'
import {CurrentEvent} from './components/CurrentEvent'
import {Body} from './components/Body'

class App extends Component {
  render() {
    return (
      <div>
        <Menu></Menu>
        <CurrentEvent></CurrentEvent>
        <Body title="Hello WatchKit" content="Last month Apple released the anticipated WatchKit Framework for developers in the form of iOS and OSX apps. The WatchKit framwork enables developers to create Apple Watch apps. In this article we are going to focus on the the basics of getting started with the Watch Kit Framework and developing apps for the Apple Watch." commentCount="12" likeCount="124">
        </Body>
        <Body title="Introduction to Swift" content="Swift is a modern programming language developed by Apple to create the next generation of iOS and OSX apps. Swift is a fairly new language and still in development, but it clearly reflects the intentions and future direction of Apple. This article will revolve around the basic concepts in the Swift language and how you can get started." commentCount="15" likeCount="45">
        </Body>
      </div>
    );
  }
}

export default App;
