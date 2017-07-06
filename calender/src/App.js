import React from 'react';
import CreateTodo from './create-todo';
import TodosList from './todos-list';
import _ from 'lodash';
import './App.css'

const todos = [
{
    task: 'Go to doctor',
    date: 'Time',
    isCompleted: false
},
{
    task: 'Eat dinner',
    date: 'Time',
    isCompleted: true
}
];

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            todos
        };
    }

    render() {
        return (
            <div className="conatiner">
              <div className="appointment box effect2">
                <div className="content">
                <h1 className="title">Appointment planner</h1>
                <CreateTodo todos={this.state.todos} createTask={this.createTask.bind(this)} />
                <TodosList
                    todos={this.state.todos}
                    toggleTask={this.toggleTask.bind(this)}
                    saveTask={this.saveTask.bind(this)}
                    deleteTask={this.deleteTask.bind(this)}
                />
              </div>
              </div>
            </div>
        );
    }

    toggleTask(task) {
        const foundTodo = _.find(this.state.todos, todo => todo.task === task);
        foundTodo.isCompleted = !foundTodo.isCompleted;
        this.setState({ todos: this.state.todos });
    }

    createTask(task, date) {
        this.state.todos.push({
            task,
            isCompleted: false,
            date
        });
        this.setState({ todos: this.state.todos });
    }

    saveTask(oldTask, newTask, oldDate, newDate) {
        const foundTitle = _.find(this.state.todos, todo => todo.task === oldTask);
        const foundDate = _.find(this.state.todos, todo => todo.date === oldDate)
        foundTitle.task = newTask;
        foundDate.date = newDate;
        if(newDate && newTask){
        this.setState({ todos: this.state.todos });
      }
    }

    deleteTask(taskToDelete) {
        _.remove(this.state.todos, todo => todo.task === taskToDelete);
        this.setState({ todos: this.state.todos });
    }
}
