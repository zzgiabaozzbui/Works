import React, {useState, useEffect} from 'react';
import './success-mess.scss'

const SuccessMess = props => {
    const [animation, setAnimation] = useState("alert alert_success");

    useEffect(() => {
        props.mess > 0 ? setAnimation("alert alert_success animation1") : setAnimation("alert alert_success");
    }, [props])

    
  return (
    <div className={animation} > 
        <button  className="close" type="button"
            onClick={()=>{setAnimation("alert alert_success animation2")}}
        >
        </button> 
        <span>success!</span> 
    </div>
  )
}

export default SuccessMess