import React, { Component } from 'react';
import './App.css';
import {Table} from 'reactstrap'; 
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const SearchField = () => {
  return (
    <form className='SearchField'>
      <input placeholder='Поиск'/> 
    </form>
  );
}
const Button = (props) =>{
  return(
    <button className='ButtonLabel' onClick={props.onClick}>
      {props.value}
    </button>
  );

}

class TaskTable extends Component{
  state = {tasks: []};

  componentDidMount(){
    fetch('/tasks')
      .then(res => res.json()) 
      .then(tasks => this.setState({tasks}))
      .catch(err => console.log(err))
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
                    <td onClick="console.log('По ссылке кликнули.'); return false">{task.Description}</td>
                    <td>{task.Status}</td>
                    <td>{task.Priority}</td>
                    <td>{task.PrefTimeEnding}</td>
                    <td>{task.RealTimeEnding}</td>
                    <td>
                      <button>Удалить</button>
                    </td> 
                  </tr> 
                )}
            </tbody>  
          </Table> 
    )
  }
}

class App extends Component{
  state = {counts: 0};

  componentDidMount(){
    fetch('/tasks/count')
      .then(res => res.json()) 
      .then(counts => this.setState({counts}))
      .catch(err => console.log(err))
  }

  render(){
    return (
      <div className="App">
        <h1>Задачи</h1> 
            <Button value='Добавить задачу' />
            <SearchField />
            <div className='FiltrPanel'>
              <Button value={'Всего - ' + this.state.counts.total} />
              <Button value={'Новых - ' + this.state.counts.newones}/>
              <Button value={'В работе - '+this.state.counts.inprocess} />
              <Button value={'Завершено - '+this.state.counts.completed} />
          </div>  
          <TaskTable/>
      </div>
    )
  }
}

export default App;
