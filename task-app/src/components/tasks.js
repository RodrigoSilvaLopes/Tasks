import React from "react";

import Task from "./task";


const Tasks = ({tasks}) => {
    return (
        <>
            {tasks.map(task => <Task />)}
        </>
    )
}

export default Tasks;