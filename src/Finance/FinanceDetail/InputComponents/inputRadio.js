import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setSecuredLoansInfo } from '../../Redux-Toolkit/slices/SecuredLoansCounter';

const InputRadio = (props) => {
    const { securedLoansInfo } =
    useSelector((state) => state.securedLoans);
    const dispatch = useDispatch();
    
  return (
    <div  style={{display:"inline-block"}}>
    <label>{props.ele.inputLabel}</label>
    {<input type={props.ele.inputType} name={props.ele.inputName} value={props.ele.inputValue} onChange={(e)=>dispatch(setSecuredLoansInfo({...securedLoansInfo,[e.target.name]:e.target.value}))}/>}
    <label>{props.ele.inputValue}</label>
  </div>
  )
}

export default InputRadio

