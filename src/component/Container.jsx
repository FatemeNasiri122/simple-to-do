import React from 'react';
import moon from '../images/icon-moon.svg'
import sun from '../images/icon-sun.svg'
import ToDoForm from "./ToDoForm";
import TodoListsContainer from "./TodoListsContainer";
import {useContext} from "react";
import TodoContext from "../context/TodoContext";
import TodoStats from "./TodoStats";

const Container = () => {
    const {darkMode , setDarkMode} = useContext(TodoContext);
    return (
        <>
            <div className={`container ${darkMode ? ' background-dark' : 'background-light'}`}>
                <div className="to-do-container">
                    <div className='to-do-header'>
                        <h1 className="title">todo</h1>
                        <img src={darkMode ? sun : moon} alt="icon" className='theme-mode' onClick={() => {setDarkMode((prev) =>{return !prev})}}/>
                    </div>
                    <ToDoForm />
                    <div className={`to-do ${darkMode ? ' dark-background' : 'light-background'}`}>
                        <TodoListsContainer />
                        <TodoStats />
                    </div>
                </div>
                <p className="drag-text">Drag and drop to reorder list</p>
            </div>

        </>

    );
};

export default Container;