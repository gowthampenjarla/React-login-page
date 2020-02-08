import React, { Component } from 'react';
import './App.css';
import Login from './components/Login';
import Alert from './components/Alert';

export class App extends Component {
  state = {
    user: null,
    alert: null
  };
  validateUser = user => {
    console.log(user);
    if (user.email === '' || user.password === '') {
      let alert = {
        msg: 'UserName or Password Must not be blank',
        type: 'danger'
      };
      this.showAlert(alert);
    } else {
      let regEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,12}$/;
      let regTest = regEx.test(user.password);
      console.log(regTest, user.password);
      if (!regTest) {
        let alert = {
          msg: 'Password must have must match the criteria',
          type: 'danger'
        };
        this.showAlert(alert);
      } else {
        let alert = {
          msg: 'You are now logged in',
          type: 'success'
        };
        this.showAlert(alert);
      }
    }
  };

  showAlert(alert) {
    this.setState({
      alert: {
        msg: alert.msg,
        type: alert.type
      }
    });
    setTimeout(() => this.setState({ alert: null }), 3000);
  }

  render() {
    return (
      <div className='container'>
        <div className='display-2 text-center'>React Login</div>
        <Alert alert={this.state.alert} />
        <Login validate={this.validateUser} />
      </div>
    );
  }
}

export default App;
