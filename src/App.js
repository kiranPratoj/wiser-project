import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './components/homepage';
import SignIn from './components/sigin';
// import Technical from './components/technical';

const App = () => {
  return (
    <div>
      <main>
      <BrowserRouter>
      <Route path='/home' component={Home} />     
      <Route path='/' component={SignIn} exact={true}/>
      {/* <Route path ='/technical' component={Technical} />       */}
      </BrowserRouter>
      </main>
    </div>
  )
}

export default App
