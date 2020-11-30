import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom';
// import Home from './components/homepage';
import SignIn from './components/sigin';
// import MenuBar from './src1/menuBar.js'
import HomePage from './components/homepage';
import FunctionsPage from './components/pages/FunctionsPage';
import LocationsPage from './components/pages/Locations/LocationsPage';
import SettingsPage from './components/pages/Settings/SettingsPage';

const App = () => {
  return (
    <div>
      <main>
      <BrowserRouter>
      <Route path='/signin' component={SignIn} />
      <Route path='/' component={HomePage} exact={true} />  
      <Route path='/Functions/Function1' component={FunctionsPage} />
      <Route path='/Locations/Location1' component={LocationsPage} />
      <Route path='/Settings' component={SettingsPage} />
          </BrowserRouter>
      </main>
    </div>
  )
}

export default App
