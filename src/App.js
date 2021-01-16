import React from 'react';
import './App.css';
import Todofrm from './Components/Todofrm';
import TodoList from './Components/TodoList';
const HookApp = () => {
    return (
        <div className="todo-app">
            <TodoList />
        </div>
    );
};

export default HookApp;