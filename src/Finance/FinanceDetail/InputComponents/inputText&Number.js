import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setInputInfo, setSecuredLoansInfo } from '../../Redux-Toolkit/slices/SecuredLoansCounter';

const InputTextAndNumber = (props) => {
    const { securedLoansInfo,inputInfo } =
    useSelector((state) => state.securedLoans);
    const dispatch = useDispatch();

    const handleTextAndNum = (e) => {
      dispatch(setSecuredLoansInfo({...securedLoansInfo,[e.target.name]:e.target.value}))
      if(e.target.value =="usedCar"){
        const updatedInputInfo = inputInfo.map(item => {
          
          if (item.parent === e.target.value &&  item.hasOwnProperty("hidden")  ) {
            
            return { ...item, hidden: false };
          }else if(item.inputName !== e.target.name &&  item.hasOwnProperty("hidden") && !props.ele.statechange){
            return { ...item, hidden: true };
          }
          else{
              return item
          }
          
        });
        dispatch(setInputInfo(updatedInputInfo))
        console.log(updatedInputInfo);
      }
    }
  return (
        <div>
            <label>{props.ele.inputLabel}</label>
            <input type={props.ele.inputType} name={props.ele.inputName}  min={props.ele.min} defaultValue ={props.ele.inputValue} placeholder={props.ele.inputPlaceholder}  onChange={(e)=>handleTextAndNum(e)}/>
        </div>
  )
}

export default InputTextAndNumber