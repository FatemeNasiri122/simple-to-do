import React, {useEffect, useState} from 'react';
import {useContext} from "react";
import TodoContext from "../context/TodoContext";
const TodoStats = () => {
    const {todoLists , activeList , completedList ,allList ,clearCompletedList} = useContext(TodoContext);
    const [todoActive , setTodoActive] = useState([]);
    useEffect(() =>{
        const completed = todoLists.filter(todo => todo.isCompleted === false);
        setTodoActive(completed);
    },[activeList]);

    return (
        <>
            <div className="mobile-stats">
                <span className="stats-text">{todoActive.length} items left</span>
                <button className="btn btn-stats" onClick={() => clearCompletedList()}>clear completed</button>
            </div>
            <div className="to-do-stats">
                <span className="stats-text M-hidden">{todoActive.length} items left</span>
                <span className="btns">
                    <button className="btn btn-stats" onClick={() => allList()}>all</button>
                    <button className="btn btn-stats" onClick={() => activeList()}>active</button>
                    <button className="btn btn-stats" onClick={() => completedList()}>completed</button>
                </span>
                <button className="btn btn-stats M-hidden" onClick={() => clearCompletedList()}>clear completed</button>
            </div>
        </>
    );
};
export default TodoStats;