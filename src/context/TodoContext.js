import {createContext, useReducer, useState} from "react";
import todoReducer from "./todoReducer";
const TodoContext = createContext();
export const TodoProvider = ({children}) =>{
    const [darkMode,setDarkMode] = useState(false);

    const initialState = {
        list: {},
        lists: [
            {id: Math.random(),
            text: "Complete online Javascript course",
            isCompleted: true},
            {id: Math.random(),
                text: "Jog around the park 3x",
                isCompleted: false},
            {id: Math.random(),
                text: "10 minutes meditation",
                isCompleted: false},
            {id: Math.random(),
                text: "Read for 1 hour",
                isCompleted: false},
            {id: Math.random(),
                text: "Pick up groceries",
                isCompleted: false},
            {id: Math.random(),
                text: "Complete Todo App on Fronted Mentor",
                isCompleted: false},
        ],
        allLists: [],
    }
    const [state,dispatch] = useReducer(todoReducer,initialState);
    const addList = (todo) => {
        dispatch({
                  type: 'ADD_TO_LIST',
                   payload: {
                      list: todo,
                      lists: [todo , ...state.lists],
                      allLists: [...state.lists],
                   }
        });
    }
    const allList = () => {
        dispatch({
            type: 'ALL_TO_LIST',
            payload: [...state.allLists]
        })
    }
    const activeList = () => {
       state.lists = state.allLists.filter((list) => {
            return list.isCompleted === false
        })
        dispatch({
            type: 'ACTIVE_LIST',
            payload: [...state.lists]
        })
    }
    const completedList = () => {
        state.lists = state.allLists.filter((list) => {
            return list.isCompleted === true
        })
        dispatch({
            type: 'COMPLETED_LIST',
            payload: [...state.lists]
        });
    }
    const clearCompletedList = () => {
        state.lists = state.allLists.filter((list) =>{
            return list.isCompleted === false
        })
        dispatch({
            type: 'CLEAR_COMPLETED_LIST',
            payload: [...state.lists]
        });
    }
    const changeComplete = (id) => {
        state.lists.map((list) => {
            if (id === list.id){
                list.isCompleted = true
            }
        });
        dispatch({
            type: 'COMPLETED',
            payload: [...state.lists]
        })
    }

    const deleteList = (id) => {
        state.lists = state.lists.filter((list) =>{
            return list.id !== id
        })
        dispatch({
            type: 'DELETE_TO_LIST',
            payload: {
                lists: [...state.lists],
            }
        })
    }

    return(
        <TodoContext.Provider value={{todoLists : state.lists , allLists : state.allLists , darkMode , setDarkMode, addList , changeComplete , deleteList , activeList , completedList , allList , clearCompletedList}}>
            {children}
        </TodoContext.Provider>
    )
}

export default TodoContext