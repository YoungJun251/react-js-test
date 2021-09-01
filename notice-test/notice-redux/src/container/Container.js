import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BoardList from '../component/BoardList';
import BoardNew from '../component/BoardNew';
import { saveDataAsync, searchDataAsync, removeDataAsync } from '../module/boardReducer';
import Table     from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow  from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';



function Container() {

    let [inputData, setInputData] = useState({
        id: '',
        boardId: '',
        boardTitle: '',
        boardContent: ''
    });

    const dispatch = useDispatch();

    const {boards, lastId} = useSelector(state => state.boardReducer);

    const onSearchButtonClick = () => {
        resetForm();
        dispatch(searchDataAsync());
    }

    const onSaveButtonClick = (data) => {
        dispatch(saveDataAsync(data, lastId));
    }

    const onRemoveButtonClick = (id) => {
        dispatch(removeDataAsync(id));
    }

    const onRowClick = (id, boardId, boardTitle, boardContent) => {
        setInputData({
            id: id,
            boardId: boardId,
            boardTitle: boardTitle,
            boardContent: boardContent
        })
    }

    const changeInput = (e) => {
        setInputData({
            ...inputData,
            [e.target.name]: e.target.value
        })
    }

    const resetForm = () => {
        setInputData({
            boardId: '',
            boardTitle: '',
            boardContent: ''
        })
    }

    return (
        <div>
            <button onClick={onSearchButtonClick}>조회</button>
            <div>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell align='center' color='red'>번호</TableCell>
                    <TableCell align='center'>제목</TableCell>
                    <TableCell align='center'>내용</TableCell>
                    <TableCell align='center'>글삭제</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {boards.length > 0 && boards.map(row =>
                    <BoardList
                        key={row.boardId}
                        id={row.id}
                        boardId={row.boardId}
                        boardTitle={row.boardTitle}
                        boardContent={row.boardContent}
                        onRowClick={onRowClick}
                        onRemoveButtonClick={onRemoveButtonClick}
                    />
                )}
            </TableBody>
        </Table>
    </div>
            <div>
                <BoardNew 
                    changeInput={changeInput}
                    inputData={inputData}
                    onSaveButtonClick={onSaveButtonClick}
                    resetForm={resetForm}
                />
            </div>
        </div>
    );
}

export default Container;