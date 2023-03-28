import React from 'react';
import {useContext} from "react";
import TodoContext from "../context/TodoContext";
import {AiOutlineCheck, AiOutlineClose} from "react-icons/ai";

const Todolist = ({text ,completed ,id}) => {
    const {changeComplete ,deleteList, darkMode} = useContext(TodoContext);

    return (
        <div className="list-item">
            <div className="list-text">
                <span
                    className={`circle-check ${completed && "completed"}`}
                    onClick={() =>{changeComplete(id)}}
                >
                {completed && <AiOutlineCheck color={`${darkMode ? "white" : "black"}`} />}
            </span>
                <span className={`text ${darkMode ? "dark-text" : "light-text"} ${completed && "text-completed"}`}>{text}</span>
            </div>
            <button className="btn" onClick={() =>{deleteList(id)}}>
                <AiOutlineClose color={`${darkMode ? "white" : "black"}`} />
            </button>
        </div>
    );
};

export default Todolist;