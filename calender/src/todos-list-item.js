import React from 'react';
import './App.css'

export default class TodosListItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isEditing: false
        };
    }

    renderTaskSection() {
        const { task, isCompleted, date } = this.props;

        const taskStyle = {
            color: isCompleted ? 'green' : 'red',
            cursor: 'pointer',
        };

        if (this.state.isEditing) {
            return (
                <td>
                    <form className="form" onSubmit={this.onSaveClick.bind(this)}>
                        <input className = "input-title " type="text" defaultValue={task} ref="editInput" />
                        <input className = "input-date" type ="date" defaultValue={date} ref="editDate"/>
                    </form>
                </td>
            );
        }

        return (
          <div className="main_task_div">
            <table className="main_task_div">
            <td style={taskStyle}
                onClick={this.props.toggleTask.bind(this, task)} className="task_style">
                Task: {task}
            </td>


            <td style={taskStyle} onClick={this.props.toggleTask.bind(this, task)} className = "task_style date">Time: {date}</td>

        </table>
          </div>
        );
    }

    renderActionsSection() {
        if (this.state.isEditing) {
            return (
                <td className="button-alignment">
                    <button className = "button button1" onClick={this.onSaveClick.bind(this)}>Save</button>
                    <button className="button button5" onClick={this.onCancelClick.bind(this)}>Cancel</button>
                </td>
            );
        }

        return (
            <td className="button-alignment">
                <button className = "button button2" onClick={this.onEditClick.bind(this)}>Edit</button>
                <button className = "button button3" onClick={this.props.deleteTask.bind(this, this.props.task)}>Delete</button>
            </td>
        );
    }

    render() {
        return (
            <tr>
                {this.renderTaskSection()}
                {this.renderActionsSection()}
            </tr>
        );
    }

    onEditClick() {
        this.setState({ isEditing: true });
    }

    onCancelClick() {
        this.setState({ isEditing: false });
    }

    onSaveClick(event) {
        event.preventDefault();

        const oldTask = this.props.task;
        const oldDate = this.props.date;
        const newDate = this.refs.editDate.value;
        const newTask = this.refs.editInput.value;
        this.props.saveTask(oldTask, newTask,oldDate, newDate);
        this.setState({ isEditing: false });
    }
}
