import React from 'react';
import './App.css';
export default class TodosListHeader extends React.Component {
    render() {
        return (
          <div className="table_header">
            <thead>
                <tr>
                    <th className="header_text">Task</th>
                    <th className="header_text action">Action</th>
                </tr>
            </thead>
          </div>
        );
    }
}
