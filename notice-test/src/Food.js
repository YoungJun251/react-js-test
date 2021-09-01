import React, {Component} from 'react';

class Food extends Component {
    render() {
        return (
            <dib>
                <div>제가 제일 좋아하는 음식은 <b>{this.props.val1}</b>입니다.</div>
                <div>그 다음은 <b>{this.props.val2}</b>을 좋아합니다.</div>
            </dib>
        );
    }
}
export default Food;