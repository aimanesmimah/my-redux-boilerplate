import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Students from './components/students';
import Classroom from './components/class';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  getChildContext() {
    return {
      store : this.props.store
    }
  }

  componentWillMount() {
    const {store} = this.props ;



  }

  componentWillUnmount() {

  }
  render() {
    return (
      <div className="App">

         <Classroom />
         <br/><br/>
         <Students />
      </div>
    );
  }
}

App.propTypes = {
  store : PropTypes.object.isRequired
}

App.childContextTypes = {
  store : PropTypes.object.isRequired
}

export default App;
