import React, { Component } from 'react';
import './App.css';
import Finder from './components/Finder';
import Form from './components/Form';
import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Form />
        <Finder />
      </div>
    );
  }
}
export default App;
