import React from 'react';
import _ from 'lodash';
import '../node_modules/react-datetime/css/react-datetime.css'

export default class TodosList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            error: null
        };
    }

    renderError() {
        if (!this.state.error) { return null; }

        return <div style={{ color: 'red' }}>{this.state.error}</div>;
    }

    render() {
        return (
            <form onSubmit={this.handleCreate.bind(this)} className="form-input">
                <input type="text" className="input-task create-task" placeholder="What do I need to do?" ref="createInput" />
                <input type="date" className= "input-task create-date" input={false} open={true} ref="dataInput" placeholder="Date"/>
                <button className="btn btn-success button_create">Create</button>
                {this.renderError()}
            </form>
        );
    }

    handleCreate(event) {
        event.preventDefault();

        const createInput = this.refs.createInput;
        const task_title = createInput.value

        const createDate = this.refs.dataInput
        const task_date = createDate.value

        this.props.createTask(task_title, task_date);
        this.refs.createInput.value=''

        // const createInput = this.refs.createInput;
        // const task = createInput.value;
        // const validateInput = this.validateInput(task);
        //
        // if (validateInput) {
        //     this.setState({ error: validateInput });
        //     return;
        // }
        //
        // this.setState({ error: null });
        // this.props.createTask(task);
        // this.refs.createInput.value = '';
    }

    validateInput(task) {
        if (!task) {
            return 'Please enter a task.';
        } else if (_.find(this.props.todos, todo => todo.task === task)) {
            return 'Task already exists.';
        } else {
            return null;
        }
    }
}
