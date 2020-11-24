import React, { Component } from 'react';
import MenuBar from './menuBar'
import { BrowserRouter } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <MenuBar/>
      </BrowserRouter>
    )
  }
}
export default App;