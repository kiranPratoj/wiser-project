import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom';
// import Home from './components/homepage';
import SignIn from './components/sigin';
import MenuBar from './src1/menuBar.js'
// import Technical from './components/technical';

const App = () => {
  return (
    <div>
      <main>
      <BrowserRouter>
      <Route path='/home' component={MenuBar} />     
      <Route path='/' component={SignIn} exact={true}/>
      {/* <Route path ='/technical' component={Technical} />       */}
      </BrowserRouter>
      </main>
    </div>
  )
}

export default App
