import React, { Component } from "react";
import {Table} from 'reactstrap'; 


const borderlessButtonStyle = {
    border: "none",  
    background: "none", 
  }

class TaskTable extends Component{
    state = {
        tasks: [],
    }
  
    componentDidMount(){
      fetch('/tasks')
        .then(res => res.json()) 
        .then(tasks => this.setState({tasks}))
        .catch(err => console.log(err))
    }
  
    showPopUpMenu = () =>{
      this.setState({popUpAddTask: !this.state.popUpAddTask});
    }
  
    render(){
      return(
      <Table className='TaskTable' bordered>
              <thead>
                <tr> 
                  <th>Описание</th>
                  <th>Статус</th>
                  <th>Приоритет</th>
                  <th>Плановая дата окончания</th>
                  <th>Фактическая дата окончания</th>
                  <th>Действие</th>
                </tr>
              </thead>
              <tbody> 
                {this.state.tasks.map(task => 
                    <tr>
                      <td> 
                        <button style={borderlessButtonStyle} onClick={this.showPopUpMenu}>
                          {task.Description}
                        </button>
                      </td>
                      <td>{task.Status}</td>
                      <td>{task.Priority}</td>
                      <td>{task.PrefTimeEnding}</td>
                      <td>{task.RealTimeEnding}</td>
                      <td>
                        <button style={borderlessButtonStyle} onClick={this.showPopUpMenu}>
                          Удалить                      
                        </button>
                      </td>
                    </tr> 
                  )}
              </tbody>  
            </Table> 
      )
    }
  }
  export default TaskTable;
  