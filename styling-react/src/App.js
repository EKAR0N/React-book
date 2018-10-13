import React, { Component } from 'react';
import styles from './App.css';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

class App extends Component {

  state = {
    isBlue: false,
  }

  handleClick = () => {
    this.setState({
      isBlue: !this.state.isBlue,
    })
  }

  render() {
    return (
      <div>
      <button onClick={this.handleClick}>버튼</button>
        <div className={cx('box', {
          blue: this.state.isBlue
        })}>
        
        </div>
      </div>
      
    );
  }
}

export default App;
