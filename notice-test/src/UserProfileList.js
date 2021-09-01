import React,{Component} from 'react'
import UserProfile from './UserProfile';

class UserProfileList extends Component{
    static defaultProps = {
        data: []
    }

    render(){
        const {data} = this.props;

        const userInfoMap = data.map(
            info => (<UserProfile key={info.id} info = {info}/>)
        );

        return(
            <div>
                {userInfoMap}
            </div>
        );
    }
}
export default UserProfileList;
