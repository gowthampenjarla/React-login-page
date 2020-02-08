import React, { Component } from 'react';

export class Login extends Component {
  state = {
    email: '',
    password: ''
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    const user = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.validate(user);
    this.setState({
      email: '',
      password: ''
    });
  };

  render() {
    return (
      <div>
        <div>
          <form className='needs-validation mt-5' onSubmit={this.onSubmit}>
            <div className='form-group'>
              <label>Email address</label>{' '}
              <input
                type='email'
                name='email'
                placeholder='Email'
                value={this.state.email}
                onChange={this.onChange}
                className='form-control'
              />
              <span className='validity'></span>
            </div>
            <div className='form-group'>
              <label>Password</label>
              <input
                type='password'
                name='password'
                placeholder='Password'
                value={this.state.password}
                className='form-control'
                onChange={this.onChange}
              />
            </div>

            <button type='submit' className='btn btn-primary'>
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
