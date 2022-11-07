import React, {useState, useEffect, useRef} from 'react';
import SuccessMess from '../SuccessMess/SuccessMess';
import ErrorMess from '../ErrorMess/ErrorMess';

import './add-task.scss';
import axios from 'axios';
const AddTask = prop => {
  // let date = new Date();
  // var today = date.toISOString().substr(0, 10);
  const [prio, setPrio] = useState('addTask__content__right__prioriti prioriti');
  const titleRef = useRef();
  const desRef = useRef();
  const dateRef = useRef();
  const prioRef = useRef();

  
  const [successMess,setSuccessMess] = useState(0);
  const [errorMess,setErrorMess] = useState(0);

  const post = props => {
    const object = {
      title: titleRef.current.value,
      description:desRef.current.value,
      date:dateRef.current.value,
      prio: prioRef.current.className === 'addTask__content__right__prioriti prioriti' ? 1 : 0,
      finish:0
    }
    axios.post('http://localhost:3001/addWork', object)
    .then(function (response) {
      console.log(response);
      setSuccessMess(successMess+1);
      console.log(successMess);
      prop.add();
      
      
    })
    .catch(function (error) {
      
      setErrorMess(errorMess+1);
      console.log(error);
    });
    // console.log(titleRef);
  }

  useEffect(() => {
 
  }, [])
  

  return (
    <div>
      <form className="addTask" id="addWork" method="post" action="" >
        <h3 className="addTask__question" >What do You Have<span> ToDo?</span></h3>
        <div className="addTask__input">
          <input className="addTask__input__title " placeholder="Title" type="text"  ref={titleRef} />
          <br />
          <textarea className="addTask__input__description " placeholder="Description" type="text" ref={desRef} />
        </div>
        
        <div className="addTask__content">
          <div className="addTask__content__date ">
            <input className="addTask__content__date " type="date" name="" ref={dateRef}  />
          </div>
          <div className="addTask__content__right">
            <label 
                id="prio" 
                type="text" 
                className={prio} 
                onClick={()=>{prio === 'addTask__content__right__prioriti prioriti' ? 
                setPrio('addTask__content__right__prioriti notprioriti') 
                : setPrio('addTask__content__right__prioriti prioriti') 
                }}
                ref={prioRef} 
            >Prioritize?</label> 
            <br />
            <button type="button" onClick={()=>{post();}} className="addTask__button__right__add" >Add</button>
          </div>
        </div>

        
    </form>
          <SuccessMess mess={successMess}></SuccessMess>
          <ErrorMess mess = {errorMess}></ErrorMess>
    </div>
  )
}

export default AddTask;