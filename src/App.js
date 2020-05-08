import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // CSS Bootstrap
import Header from './components/common/Header'
import Home from './components/home/Home'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Blog from './components/blog/Blog'
import './App.css'


function App() {
  return (
    <Router>
      <Header/>
      <Switch>
        <Route path='/' exact component={Home}></Route>
        <Route path='/about' exact component={About}></Route>
        <Route path='/contact' exact component={Contact}></Route>
        <Route path='/blog' exact component={Blog}></Route>
      </Switch>
    </Router>
  );
}

export default App;
