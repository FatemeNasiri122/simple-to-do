import React, {useState} from 'react';
import {useContext} from "react";
import TodoContext from "../context/TodoContext";
import { FaPlus } from "react-icons/fa";

const ToDoForm = () => {
    const {addList , darkMode} = useContext(TodoContext);
    const [inputValue, setInputValue] = useState('');
    const [isValid , setIsValid] = useState(false);
    const handleChange = (e) => {
        setInputValue(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue === ''){
            setIsValid(true);
            return;
        } else {
            setIsValid(false);
        }
        const todo = {
            id: Math.random(),
            text: inputValue,
            isCompleted: false
        }
        addList(todo);
        setInputValue('');
    }
    return (
        <>
            <form action="" onSubmit={handleSubmit} className={`form  ${darkMode ? 'dark-background dark-text' : 'light-background light-text'}`}>
                <div className="list-container">
                    <span className={`circle`}></span>
                    <input className={`input`} type="text" value={inputValue} onChange={handleChange} placeholder='Create a new todo...'/>
                    <button className='btn' onSubmit={handleSubmit}>
                        <FaPlus cursor='pointer' color={darkMode ? 'white' : 'black'}/>
                    </button>
                </div>
                {isValid && <p className="error">please fill out this field</p>}
            </form>
        </>
    );
};

export default ToDoForm;