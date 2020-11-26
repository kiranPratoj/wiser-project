import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom';
// import Home from './components/homepage';
import SignIn from './components/sigin';
// import MenuBar from './src1/menuBar.js'
import HomePage from './components/homepage';

const App = () => {
  return (
    <div>
      <main>
      <BrowserRouter>
      <Route path='/home' component={HomePage} />     
      <Route path='/' component={SignIn} exact={true}/>
          </BrowserRouter>
      </main>
    </div>
  )
}

export default App
