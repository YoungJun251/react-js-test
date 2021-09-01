import React, {useEffect, useState} from 'react';

function Count(){

    
    let numberState = useState(0);
    let numberCount = numberState[0];
    let setNumberCount = numberState[1];


    // 문자형 useState 사용
    let stringState = useState("A");
    let stringCount = stringState[0];
    let setStringCount = stringState[1];

    useEffect( () => {
        console.log("렌더링 되었습니다.");
    }, [numberCount]);
    
    // 숫자 증가 이벤트
    function numberIncrease() {
        setNumberCount(numberCount + 1);
    }

    // 문자 증가 이벤트
    function stringIncrease() {
        setStringCount(stringCount + "A");
    }

    return (
        <div>
            <div>
                <h3>{numberCount}</h3>
                <button onClick={numberIncrease}> 증가 </button>
            </div>
            <div>
                <h3>{stringCount}</h3>
                <button onClick={stringIncrease}> 증가 </button>
            </div>
        </div>
    )
}
export default Count;
