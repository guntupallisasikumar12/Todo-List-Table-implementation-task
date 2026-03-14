import React, { useState, useRef } from "react";

function TodoInput({ addTask }) {

    const [task, setTask] = useState("");
    const inputRef = useRef(null);

    const handleAdd = () => {
        addTask(task);
        setTask("");
        inputRef.current.focus();
    };

    return (
        <div style={{ marginBottom: "20px" }}>
            <input
                ref={inputRef}
                type="text"
                placeholder="Enter task"
                value={task}
                onChange={(e) => setTask(e.target.value)}
            />

            <button onClick={handleAdd}>Add</button>
        </div>
    );
}

export default TodoInput;