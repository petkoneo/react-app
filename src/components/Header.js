import React, { Component } from 'react';


class Header extends Component {

  shouldComponentUpdate(nextProps, nextState) {
    return false;
  }

  render() {
    return <h1 className='f2'>Robot App With React</h1>
  }
}


export default Header
