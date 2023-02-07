import React, {useEffect, useState} from 'react';

import {todosRequest} from "../../api/request/todoRequest";
import TodosList from "../../components/todo_list/TodosList";

export const TodosPage = () => {
    const [todoList, setTodoList] = useState([]);
    useEffect(() => {
        todosRequest.getAll().then(({data}) =>  setTodoList([...data]))

    },[]);
    return (
        <div style={{width: '100%', margin: '0 auto'}}>
            <h1>TodosPage</h1>
            <TodosList todoList={todoList}/>
        </div>
    );
};

