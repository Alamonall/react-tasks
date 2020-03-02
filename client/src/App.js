import React, { Component } from 'react';
import './App.css';
import TaskTable from './Table.js';
import ModalAddTask from './Modal.js';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Button, Modal } from "semantic-ui-react";

const SearchField = () => {
  return (
    <form className='SearchField'>
      <input placeholder='Поиск'/> 
    </form>
  );
}

const ButtonLabel = (props) =>{
  return(
    <button className='ButtonLabel' onClick={props.onClick}>
      {props.value}
    </button>
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
        <Modal trigger={<Button>Добавить задачу</Button>}>
          <ModalAddTask/>
        </Modal>
        <SearchField />
        <div className='FiltrPanel'>
          <ButtonLabel value={'Всего - ' + this.state.counts.total} />
          <ButtonLabel value={'Новых - ' + this.state.counts.newones}/>
          <ButtonLabel value={'В работе - '+this.state.counts.inprocess} />
          <ButtonLabel value={'Завершено - '+this.state.counts.completed} />
        </div>  
        <TaskTable/>        
      </div>
    )
  }
}

export default App;
