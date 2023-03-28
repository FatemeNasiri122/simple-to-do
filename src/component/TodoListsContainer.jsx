import React, {useEffect, useState} from 'react';
import {useContext} from "react";
import TodoContext from "../context/TodoContext";
import Todolist from "./Todolist";
import {AnimatePresence, motion ,Reorder} from "framer-motion";
const TodoListsContainer = () => {
    const { todoLists } = useContext(TodoContext);
    const [items,setItems] = useState([]);
    useEffect(() => {
        setItems(() => todoLists);
    },[todoLists]);

    return (
            <Reorder.Group values={items} onReorder={setItems}>
                <AnimatePresence>
                    {items.map((list) => {
                        return (<motion.div initial={{y: -100 }}
                                            animate={{ y: 1 }}
                                            exit={{  opacity: 0 }} key={list.id}>
                            <Reorder.Item key={list.id} value={list} as="ul" >
                                <Todolist text={list.text} completed={list.isCompleted} id={list.id} as="li" />
                            </Reorder.Item>
                        </motion.div>)
                    })}
                </AnimatePresence>
            </Reorder.Group>
    );
};

export default TodoListsContainer;