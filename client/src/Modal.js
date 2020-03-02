
import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const ModalExample = (props) => {
  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <button className='AddTaskButton' onClick={toggle}>{buttonLabel}</button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Создание/редактирование задачи</ModalHeader>
        <ModalBody>
        <div className='AddTaskPopUp'> 
            <label className='InputLabel'>Описание</label>
            <input className='DescriptionInput'></input>

            <div className='Dropdowns'> 
                <div className='PriorityDD'> 
                    <label className='SelectLabel'>Приоритет:</label> 
                    <select className='PrioritySelect'>
                        <option value="volvo">Volvo</option>
                        <option value="saab">Saab</option>
                        <option value="mercedes">Mercedes</option> 
                    </select>
                </div>
                <div className='StatusDD'>
                    <label className='SelectLabel'>Статус:</label> 
                    <select className='StatusSelect'>
                        <option value="1">Volvo</option>
                        <option value="2">Saab</option>
                        <option value="3">Mercedes</option> 
                    </select>
                </div>
            </div>
            <label className='InputLabel'>Крайний срок</label>
            <input className='TimeInput'></input>
            
        </div>
        </ModalBody>
        <ModalFooter>
        <button className='SaveButton' onClick={toggle}>Сохранить</button> 
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalExample;