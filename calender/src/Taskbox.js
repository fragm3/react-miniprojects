import React from 'react';

const Task = (props) => {
  return(
    <div className="task">
      <div className="task-title">{props.title}</div>
      <div className="task-time">{props.time}</div>
    </div>
  )
}
