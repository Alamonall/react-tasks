import React from "react";

const ModalAddTask = () => (
    <div className='PopUpAddTask'>
        <h3>Создание/редактирование задачи</h3>
        <label >Описание</label>
        <input className='InputDescription'></input>

        <div className='Dropdowns'>
          <div className='DDPriority'> 
            <label>Приоритет:</label> 
            <select id="Priority">
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="mercedes">Mercedes</option> 
            </select>
          </div>
          <div className='DDStatus'>
            <label>Статус:</label> 
            <select id="Status">
              <option value="1">Volvo</option>
              <option value="2">Saab</option>
              <option value="3">Mercedes</option> 
            </select>
          </div>         
        </div>

        <div className='DivInputTime'>
          <label>Крайний срок</label>
          <input className='InputTime'></input>
        </div>
        <button className='SaveButton'>Сохранить</button>
      </div>
);

export default ModalAddTask;