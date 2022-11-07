import React, { useEffect, useState } from 'react'
import Task from '../Task/Task';
import './todo-list.scss';
import moment from 'moment';
import _ from 'lodash';


const TodoList = props => {

    const datas =  _.sortBy(props.data, function(o) { 
        return new moment(o.date); 
    }).reverse();
    console.log(props);
    
    const [sort, setSort] = useState(0);
    const [item, setItem] = useState([]);
    useEffect(() => {
        if(props.data.length > 0 ){
            console.log(sort);
            if(sort===0){
                setItem(props.data);
            }else{
                setItem(datas);

            }
        }
        
    }, [props, sort]);
    
    // const sortByDate = () => {
        
    //     // //Hàm của lodash sẽ sắp xếp tăng dần
    //     // //Hàm của moment ép kiểu date
    //     // //.reverse(); sẽ đảo ngược / lật ngược toàn bộ mảng
    //     // var datas =  _.sortBy(props.data, function(object) { 
    //     //     return new moment(object.date); 
    //     // });
    //     // setSort(1);
    //     // setItem(datas);
    //     // // console.log(datas);
    // }
  return (
    <div className="tasks">
        <div className="tasks__title">
            <span className="tasks__title__Todo">ToDo </span>
            <span  className="tasks__title__List">list</span>
        </div>
        <div className="tasks__sort" >
            <div className="sortDate">
                <span >Sort by: Date </span> 
                <i className="fas fa-arrow-down" onClick={() => {setSort(1);}}></i>
            </div>
        </div>
        <div className="tasks__content">
            <ul className="tasks__content__list" id="tasks__content__list">
                
                {
                    item.map((item,i) => (
                        <Task item={item} key={i} delete={props.delete}></Task>
                    ))
                }
                
            </ul>
        </div>
    </div>
  )
}

export default TodoList;