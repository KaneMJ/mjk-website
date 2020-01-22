import React from "react";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Chat from "./components/Chat/Chat";
import Login from "./components/Login/Login";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/login" component={Login} />
        <Route exact path="/" component={Home} />
        <Route path="/chat" component={Chat} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </BrowserRouter>
    </div>
  );
}

export default App;
