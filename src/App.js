import React from 'react'
import Home from './components/Home'
import About from './components/About'
import Navbar from './components/Navbar'
import Chat from './components/Chat'
import Contact from './components/Contact'
import { BrowserRouter, Route } from 'react-router-dom'
import 'semantic-ui-css/semantic.min.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Route exact path='/' component={Home} />
        <Route path='/chat' component={Chat} />
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />
      </div>
    </BrowserRouter>
  );
}

export default App;
