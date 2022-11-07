import React , { useEffect, useState } from 'react'

import TaskToday from '../components/TaskToday/TaskToday';
import AddTask from '../components/AddTask/AddTask';
import TodoList from '../components/TodoList/TodoList';
import './home.scss';
import axios from 'axios';
const Home = () => {
  

  const getList = async () => {
    var response = null;
    response = await axios.get('http://localhost:3001/getAll');
    setItem(response.data);
    // console.log(response.data);
  }

  const [item, setItem] = useState([]);
    useEffect(() => {
        
          getList();
    }, [])
    
  return (
    <div className="container">
        <div className="container__left">
          <AddTask data={item} className="container__left__addTask" add={getList}></AddTask>
          <TaskToday data={item} className="container__left__taskToday"></TaskToday>
        </div>
        <div className="container__right">
          <TodoList data={item} delete = {getList}></TodoList>
        </div>
      </div>
  )
}

export default Home;