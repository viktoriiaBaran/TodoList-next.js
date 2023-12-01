import React from 'react'

export default function TodoItem({ task, onRemove, onToggle}) {
    const { id, text, completed } = task;

    const handleCheckboxToggle = () => {
        onToggle(id);
    }

    const handleRemoveClick = () => {
        onRemove(id);
    }

    return (
        <div className="flex items-center justify-between mb-2 p-2.5 bg-white border border-solid border-gray-300 rounded shadow-sm">
			<input className="mr-2.5" onInput={handleCheckboxToggle} type="checkbox" />
			<label className="flex-1 mr-2.5 lg:text-lg" style={completed ? { textDecoration: "line-through" } : {}}>
				{text}
			</label>
			<button className="bg-red-500 hover:bg-red-700 text-white border-none rounded px-2.5 py-1 cursor-pointer transition-all duration-300 ease-in-out" onClick={handleRemoveClick}>Remove</button>
		</div>
    )
}
