import React, { Component } from 'react';
import './App.css';
import TaskTable from './Table.js';
import ModalAddTask from './Modal.js'; 
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'; 

const SearchField = () => {
  return (
    <form className='SearchField'>
      <input placeholder='Поиск'/> 
    </form>
  );
}

class App extends Component{
  state = {
    counts: 0,
  }; 

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
        <ModalAddTask buttonLabel='Добавить задачу' ></ModalAddTask>
        <SearchField />
        <div className='FiltrPanel'>
          <button basic className='LabelButton'>{'Всего - ' + this.state.counts.total}</button>
          <button className='LabelButton'>{'Новых - ' + this.state.counts.newones}</button>
          <button className='LabelButton'>{'В работе - '+this.state.counts.inprocess}</button>
          <button className='LabelButton'>{'Завершено - '+this.state.counts.completed} </button>
        </div>  
        <TaskTable/>        
      </div>
    )
  }
}

export default App;
