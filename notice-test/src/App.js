import React, { Component } from 'react';
// import Food from './Food';
import Count from './Count';
import UserInput from './UserInput';
import './App.css';
import { render } from '@testing-library/react';
import UserProfileList from './UserProfileList';


class App extends Component {

  //state에 userInfo 배열 전달
  state = {
    userInfo: []
  }

  loginUserHistory = (data) => {
    const {userInfo} = this.state;
    this.setState({
      userInfo: userInfo.concat({
        id: this.id++, ...data
      })
    })
  }

  //render 함수
  render() {
    
    return (
      //JSX 
      <div>
        <UserInput onCreate={this.loginUserHistory} />
        <div>
          {/* 실시간으로 JSOn string 형태로 화면에 뿌려줌 */}
          {/* {JSON.stringify(userInfo)} */}
          <UserProfileList data={this.state.userInfo}/>

        </div>
      </div>
    );
  }
}

export default App; 