import React, { Component } from 'react';
import Navbar from './component/layout/Navbar';
import Users from './component/users/Users';
import axios from 'axios';
import './App.css';


class App extends React.Component {
  // Adding in state for the user data that we will be pulling back.
  state = {
    users: [],
    loading: false, // false for now, but can be turned true if we are waiting on gathering the data.

  }


  //  This will execute when the application first loads.
  async componentDidMount(){
    this.setState({ loadig: true }); //changes the loading to true and afte it loads it will do the next thing.

    const res = await axios.get('https://api.github.com/users');

    this.setState({ users: res.data,  loading: false });

  }

  render(){

    // you can add in code here to use.
    // Return method will be displayed on the site.
    // Overall render() is used to basically render what you want to  see on the screen.

    return (
      <div className="App">
        {/* title="" is a prop being passed into navbar component. */}
        <Navbar title="Github Finder"  icon='fab fa-github'/>
        <div className='container'>
          {/* loading and users are coming in from the state and are being sent in from props. */}
          <Users loading={this.state.loading} users={this.state.users}/>
        </div>
      </div>
    );
  }
}

export default App;
