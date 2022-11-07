import React, {useState, useEffect} from 'react'


import './task-today.scss';
import _ from 'lodash';
import moment from 'moment';

// function sortByDate(){
    
//   //Hàm của lodash sẽ sắp xếp tăng dần
//   //Hàm của moment ép kiểu date
//   //.reverse(); sẽ đảo ngược / lật ngược toàn bộ mảng
//   var datas =  _.sortBy(data, function(o) { return new moment(o.date); });
  
  
//   // console.log("OK");
//   // console.log(datas);
// }

const TaskToday = props => {

  const [workToday, setWorkToday] = useState([]);
  const [index, setIndex] = useState(0);
  useEffect(() => {
    
    if(props.data.length > 0){
      var workList = [];
      
      props.data.forEach(item => {
        if(moment(item.date)._i > moment(moment().toISOString().substring(0,10))._i){
          workList.push(item);
        }
      });
      setWorkToday(workList);
      console.log(workToday);
    }
      
  }, [props]);
  
  return (
    <div className="taskToday">
      <label className="title">Tasks for Today</label>
        <div className="taskToday__task">
        <button className="taskToday__task__up" onClick={()=>{index===0 ? setIndex(workToday.length-1) : setIndex(index-1)}}>
          <i className="fas fa-chevron-up"></i>
        </button>
        {
          workToday.length === 0 ? 
          (<span>Today, don't have work!!!</span>):(
          
          <div className="border--gradient">
            <div className="taskCurrent">
              <div className="taskCurrent__description">
                <span>{workToday[index].title}</span>
              </div>
              <div className="taskCurrent__icon">
                {
                        workToday[index].priority === 1 ? (
                            <i className="fas fa-flag"></i>
                        ):null
                    }
              </div>
              <div className="taskCurrent__date">
                <span>{ moment(workToday[index].date).format('YYYY-MM-DD')}</span>
              </div>
            </div>
          </div>

        )}
        <button className="taskToday__task__down" onClick={()=>{index === workToday.length ? setIndex(0) : setIndex(index+1)}}>
          <i className="fas fa-chevron-down"></i>
        </button>
        </div>  
    </div>
  )
}

export default TaskToday;