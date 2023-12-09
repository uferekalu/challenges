import { useState, useEffect } from 'react'

export default function TodoApp(props) {
    const [tasks, setTasks] = useState([])
    const [inputValue, setInputValue] = useState("")
    const [filter, setFilter] = useState("all")
    const [editingTaskId, setEditingTaskId] = useState(null)

    useEffect(() => {
        const storedTasks = JSON.parse(localStorage.getItem("tasks"))
        if (storedTasks) {
            setTasks(storedTasks)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks))
    }, [tasks])

    const handleAddTask = () => {
        if (inputValue.trim() !== "") {
            const newTask = {
                id: Date.now(),
                text: inputValue,
                completed: false
            }
            setTasks([...tasks, newTask])
            setInputValue("")
        }
    }

    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleToggleComplete = (taskId) => {
        const updatedTasks = tasks.map((task) => {
            if (task.id === taskId) {
                return {
                    ...task,
                    completed: !task.completed
                }
            }
            return task
        })
        setTasks(updatedTasks)
    }

    const handleFilterChange = (e) => {
        setFilter(e.target.value)
    }

    const filteredTasks = tasks.filter((task) => {
        if (filter === "completed") {
            return task.completed
        } else if (filter === "active") {
            return !task.completed
        } else {
            return true
        }
    })

    const handleEditingTask = (taskId) => {
        setEditingTaskId(taskId)
    }

    const handleDeleteTask = (taskId) => {
        const updatedTasks = tasks.filter((task) => task.id !== taskId)
        setTasks(updatedTasks)
    }

    const handleUpdateTask = () => {
        if (inputValue.trim() !== "") {
            const updatedTasks = tasks.map((task) => {
                if (task.id === editingTaskId) {
                    return {
                        ...task,
                        text: inputValue
                    }
                }
                return task
            })
            setTasks(updatedTasks)
            setInputValue("")
            setEditingTaskId(null)
        }
    }
    return (
        <div>
            <h3>Todo App</h3>
            <div>
                <input type='text' value={inputValue} onChange={handleInputChange} />
                <button onClick={editingTaskId ? handleUpdateTask : handleAddTask}>
                    {editingTaskId ? "Update Task" : "Add Task"}
                </button>
            </div>
            <div>
                <select value={filter} onChange={handleFilterChange}>
                    <option value="all">All</option>
                    <option value="active">Active</option>
                    <option value="completed">Completed</option>
                </select>
            </div>
            <ul>
                {filteredTasks.map((task) => (
                    <li key={task.id}>
                        <input type='checkbox' checked={task.completed} onChange={() =>handleToggleComplete(task.id)} />
                        {task.id === editingTaskId ? (
                            <input type='text' value={inputValue} onChange={handleInputChange} onBlur={handleUpdateTask} />
                        ) : (
                            <span style={{
                                textDecoration: task.completed ? 'line-through' : 'none'
                            }}>{task.text}</span>
                        )}
                        {!editingTaskId && (
                            <>
                                <button onClick={() => handleEditingTask(task.id)}>Edit</button>
                                <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
                            </>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    )
}