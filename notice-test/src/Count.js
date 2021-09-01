import React, {Component} from 'react';

class Count extends Component{
    state={
        number: 0
    };

    btnAdd1 = () => {
        const {number} = this.state;
        this.setState({
            number: number + 1
        });
    };

    btnAdd2 = () => {
        const {number } = this.state;
        this.setState({
            number: number + 2
        });
    }

    btnAdd3 = () => {
        const { number } = this.state;
        this.setState({
          number: number + 3,
        });
      };

    render(){
        return(
            <div>
                <h2>숫자 증가시키기</h2>
                <div>값 : {this.state.number}</div>
                <button onClick={this.btnAdd1}>+1</button>
                <button onClick={this.btnAdd2}>+2</button>
                <button onClick={this.btnAdd3}>+3</button>
            </div>
        );
    }

}
export default Count;