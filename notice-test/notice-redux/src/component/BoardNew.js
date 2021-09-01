import React from 'react';
import {useForm} from 'react-hook-form';
import TextField from '@material-ui/core/TextField';


function BoardNew({ changeInput, inputData, onSaveButtonClick, resetForm }) {

    const {handleSubmit} = useForm();

    const saveBtnClick = (e) => {

        onSaveButtonClick(inputData);
        resetForm();
    }

    return (
        <div>
            <form onSubmit={handleSubmit(saveBtnClick)}>
                <div>
                    제목 : <input type="text" name="boardTitle" onChange={changeInput} value={inputData.boardTitle} />
                </div>
                <div>
                    내용 : <input type="text" name="boardContent" onChange={changeInput} value={inputData.boardContent} />
                </div>
                <input type="hidden" name="boardId" onChange={changeInput} value={inputData.boardId} />
                <button type="submit" >저장</button>
            </form>
        </div>
    )
};

export default BoardNew;