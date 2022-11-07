import React, {useState, useEffect} from 'react';
import './error-mess.scss'

const ErrorMess = props => {
    const [animation, setAnimation] = useState("alert alert_error");

    useEffect(() => {
        props.mess > 0 ? setAnimation("alert alert_error animation1") : setAnimation("alert alert_error");
    }, [props])

    
  return (
    <div className={animation} > 
        <button  className="close" type="button"
            onClick={()=>{setAnimation("alert alert_error animation2")}}
        >
        </button> 
        <span>error!</span> 
    </div>
  )
}

export default ErrorMess