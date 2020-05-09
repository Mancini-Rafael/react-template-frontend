import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // CSS Bootstrap
import Header from './components/common/Header'
import Home from './components/home/Home'
import About from './components/about/About'
import SignUp from './components/sign_up/SignUp'
import Contact from './components/contact/Contact'
import Footer from './components/common/Footer'
import './App.css'


function App() {
  return (
    <Router>
      <Header/>
      <Switch>
        <Route path='/' exact component={Home}></Route>
        <Route path='/about' exact component={About}></Route>
        <Route path='/sign_up' exact component={SignUp}></Route>
        <Route path='/contact' component={Contact}></Route>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
