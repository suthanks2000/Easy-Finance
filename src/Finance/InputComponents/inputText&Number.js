import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setSecuredLoansInfo } from '../Redux-Toolkit/slices/SecuredLoansCounter';

const InputTextAndNumber = (props) => {
    const { securedLoansInfo } =
    useSelector((state) => state.securedLoans);
    const dispatch = useDispatch();

  return (
        <div>
            <label>{props.ele.inputLabel}</label>
            <input type={props.ele.inputType} name={props.ele.inputName} defaultValue ={props.ele.inputValue} placeholder={props.ele.inputPlaceholder}  onChange={(e)=>dispatch(setSecuredLoansInfo({...securedLoansInfo,[e.target.name]:e.target.value}))}/>
        </div>
  )
}

export default InputTextAndNumber