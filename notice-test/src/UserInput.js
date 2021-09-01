import React, {Component} from 'react';

class UserInput extends Component{

    state = {
        userName: '',
        userGender: '',
        phoneNumber: ''
    }

    inputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    loginUser = (e) =>{
        e.preventDefault();

        this.props.onCreate(this.state);
        this.setState({
            userName: '',
            userGender: '',
            phoneNumber: ''
        })
    }

    render(){
        return(
            <form onSubmit={this.loginUser}>
                <input type='text' name='userName' placeholder='이름을 입력하세요' onChange={this.inputChange} value={this.state.userName}/>
                <input type='text' name='userGender' placeholder='성별을 입력하세요' onChange={this.inputChange} value={this.state.userGender}/>
                <input type='text' name='phoneNumber' placeholder='휴대폰번호을 입력하세요' onChange={this.inputChange} value={this.state.phoneNumber}/>

                <button type='submit'>로그인</button>
            </form>
        );
    }
}
export default UserInput;