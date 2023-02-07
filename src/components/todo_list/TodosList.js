import React from 'react';

const TodosList = ({todoList = []}) => {
    return (
        <div style={{
            display: 'flex',
            flexDirection : 'column',
            gap: 10,
        }}>
            {todoList.map(item => (
                <div
                    key={item.id}
                    style={{
                    background: 'lightblue'
                }}
                >
                       <div>UserId: {item.userId}</div>
                       <div>ID: {item.id}</div>
                       <div>Title: {item.title}</div>
                       <div>Status: {item.completed ? 'Completed': 'Not yet'}</div>
                   </div>
            ))}
            
        </div>
    );
};

export default TodosList;