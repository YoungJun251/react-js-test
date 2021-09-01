import React, { Component } from 'react';

class UserProfile extends Component {
  //신규 유저를 등록하기 전 최초 화면이 로딩될 때도 호출이 되는데 이 때는 data 가 존재하지 않음. default 초기화 선언.
  static defaultProps = {
  info: {
      userName: '이름',
      year: 0,
      id: 0
    }
  }
  
  //연차에 따라 직급을 return 해주는 함수 ( 연차 기준은 임의로 정한 조건임 )
  checkYear = (year) => {
    if(year == 0) {
        return '신입';
    }
    if(year == 1) {
        return '사원';
    }
    if(year == 2) {
        return '대리';
    }
    if(year >= 3 && year <= 4) {
        return '과장';
    }
    if(year >= 5 && year <= 6) {
        return '차장';
    }
    if(year >= 7 && year <= 10) {
        return '부장';
    }
    if(year > 10) {
        return '사장';
    }
  }

  render() {
    //https://velopert.com/3636 블로그를 참고해 공부하는 중인데 만들어놓으신 style 적용했음
    const style = {
      border: '1px solid black',
      padding: '8px',
      margin: '8px'
    };

    //userName, year, id 각자 UserProfileList.js 컴포넌트에서 넘어온 데이터 할당
    const { userName, year, id } = this.props.info;
    
    return (
      <div style={style}>
        <div><b>이름 : {userName}</b></div>
        <div>연차 : {year}년</div>
        <div>직급 : {this.checkYear(year)}</div>
      </div>
    );
  }
}

export default UserProfile;