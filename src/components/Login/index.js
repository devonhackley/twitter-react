import React, { Component } from 'react';
import classnames from 'classnames';

import './style.css';

export default class Login extends Component{
  static propTypes = {}
  static defaultProps = {}
  state = {}

  render() {
    const { className, ...props} = this.props;
    return (
      <div className={classnames('Login', className)} {...props}>
        <h1> Let&rsquo;s check out your Tweets</h1>
        <button><a href='/login/twitter'>Login here</a></button>
      </div>
    )
  }
}
