import './task.scss';
import React, {useState, useEffect, useRef} from 'react';
import moment from 'moment';
import {updateFinish, deleteWork} from '../../controller/crud'

const Task = props => {
    const items = props.item;
    const finishRef = useRef();      
  return (
    <li>
    <div className="border__task--gradient"  >
        <div className="task">
            <div className="task__title">
                <div className="title">
                    <span>{items.title}</span>
                    {
                        items.priority === 1 ? (
                            <i className="fas fa-flag" ></i>
                        ):null
                    }
                </div>
                <i className="fas fa-times-circle" onClick={()=>{deleteWork(items.id, props.delete); }}></i>
            </div>
            <div className="task__description">
                <label htmlFor={items.id}>{items.description}</label>
                <div className="checkWork">
                    <input 
                    ref={finishRef}
                    type="checkbox" 
                    id={items.id } name="" 
                    defaultChecked = {items.finish}  
                    onClick={() => {updateFinish(items.id, finishRef)}}
                    />
                </div>
            </div>
            
            <div className="task__date">
                <span>{moment(items.date).format('YYYY-MM-DD')}</span>
            </div>
        </div>
    </div>
    </li>
  )
}

export default Task;