import React, { Component } from 'react';
import './App.css';
import Finder from './components/Finder';
import Form from './components/Form';
import Header from './components/Header';

class App extends Component {
  state = {
    name: undefined,
    login: undefined,
    bio: undefined,
    location: undefined,
    avatar: undefined
  };
  githubFinder = async e => {
    e.preventDefault();
    const userInput = e.target.elements.userInput.value;
    let API_CALL = await fetch(`https://api.github.com/users/${userInput}`);
    let data = await API_CALL.json();
    console.log(data);
    this.setState({
      name: data.name,
      login: data.login,
      bio: data.bio,
      location: data.location,
      avatar: data.avatar_url
    });
  };
  render() {
    return (
      <div>
        <Header />
        <Form githubFinder={this.githubFinder} />
        <Finder
          name={this.state.name}
          login={this.state.login}
          bio={this.state.bio}
          location={this.state.location}
          avatar={this.state.avatar}
        />
      </div>
    );
  }
}
export default App;
