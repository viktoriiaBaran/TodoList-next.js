import React, { useEffect, useState } from 'react'
import TodoItem from '../TodoItem'
import { getItemFromLocalStorage, setItemToLocalStorage } from '../../localStorage/index'

export default function TodoList({ tasks }) {
    const [taskArr, setTaskArr] = useState([]);
    const [inputValue, setInputValue] = useState('');

    useEffect(() => {
        const itemsFromLocalStorage = getItemFromLocalStorage();
        if(itemsFromLocalStorage?.length){
            setTaskArr(itemsFromLocalStorage);
        }else if (tasks?.length) {
            setTaskArr(tasks);
        }
    }, [tasks]);

    const handleAdd = () => {
        if(inputValue){
            const newTask = {
                id: new Date().getTime(),
                completed: false,
                text: inputValue
            }
            const newList = [newTask, ...taskArr];
            setTaskArr(newList);
            setItemToLocalStorage(newList);
            setInputValue('');
        }
    }
    const handleToggle = (id) => {
        const newTaskList = taskArr.map(( task ) => {
            if(task?.id === id){
                return {
                    ...task,
                    completed: !task.completed
                }
            }
            return task;
        })
        setTaskArr(newTaskList);
    }
    const handleRemove = (id) => {
        const newTaskList = taskArr.filter(( task ) => task.id !== id);
        setTaskArr(newTaskList);
        setItemToLocalStorage(newTaskList);
    }
    const handleChangeText = (e) => {
        const text = e.currentTarget.value;
        setInputValue(text);
    }

    return (
        <div className='m-5 mx-auto max-w-lg p-5 bg-gray-200 shadow-md text-center'>
            <div className='text-2xl font-bold mb-2.5'>Task List</div>
            <input className='flex-1 p-2.5 border border-solid border-gray-300 rounded-tl-md rounded-bl-md text-xl' onChange={handleChangeText} value={inputValue} placeholder='Enter your task'/>
            <button className='bg-green-500 hover:bg-green-600 text-white border-none rounded-r-md rounded-b-md p-2.5 cursor-pointer transition-all duration-300 ease-in-out' onClick={handleAdd}>Submit</button>
            {taskArr?.length === 0 ? (
                <p className='text-gray-500 italic'>No task to display</p>
            ) : (
                <>
                    {taskArr?.map((el) => (
                        <TodoItem
                            key={el.id}
                            task={el}
                            onRemove={handleRemove}
                            onToggle={handleToggle}
                        />
                    ))}
                </>
            )}
        </div>
    )
}
