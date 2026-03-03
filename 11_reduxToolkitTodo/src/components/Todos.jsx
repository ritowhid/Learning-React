import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo } from '../features/todo/todoSlice'

function Todos() {
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()

    return (
        <>
            
            <ul className="list-none">
                {todos.map((todo) => (
                    <li
                        className="mt-4 flex justify-between items-center bg-gray-800 hover:bg-gray-700 px-6 py-3 rounded-lg shadow-md transition-all duration-200"
                        key={todo.id}
                    >
                        <div className='text-white text-lg font-medium flex-1 mr-6'>{todo.text}</div>
                        <button
                            onClick={() => dispatch(removeTodo(todo.id))}
                            className="text-white bg-red-500 hover:bg-red-600 active:bg-red-700 border-0 py-2 px-3 rounded-lg transition-colors duration-200 shadow"
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default Todos