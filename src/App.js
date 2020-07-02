import React, { Component } from 'react';
import './App.css';
import { Route} from 'react-router-dom';
import MoviesPage from './components/pages/MoviesPage';
import NewMoviesPage from './components/pages/NewMoviesPage';
import 'semantic-ui-css/semantic.min.css';
import {
  Container,
} from 'semantic-ui-react'
import Footer from './components/Footer'
import Header from './components/Header'


class App extends Component {
render() {
  
  return (
    <div className="App">
        <Header></Header>

        <Container text>
               <Route exact path="/"></Route>
               <Route exact path="/movies" component={ MoviesPage }></Route>
               <Route exact path="/movies/new" component={ NewMoviesPage }></Route>

        </Container>

       <Footer></Footer>

        
    </div>
  );
}
}

export default App;
