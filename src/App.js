import React from "react";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Chat from "./components/Chat/Chat";
import Login from "./components/Login/Login";
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "./components/store";

const reduxStore = configureStore(window.REDUX_INITIAL_DATA);

function App() {
  return (
    <div className="App">
      <Provider store={reduxStore}>
      <BrowserRouter>
        <Route path="/login" component={Login} />
        <Route exact path="/" component={Home} />
        <Route path="/chat" component={Chat} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
