import React from 'react';

const Home = ({ history }) => {
    return(
        <div>
            <h3> Home Page</h3>
            <button onClick = { () => {history.push("/about")}}> About 버튼</button>
            <button onClick = { () => {history.push("/memo")}}> Memo 버튼</button>
        </div>
    )
}

export default Home;
