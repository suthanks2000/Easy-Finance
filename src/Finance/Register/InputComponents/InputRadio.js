import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setPersonalInfo, setInputInfo } from '../../Redux-Toolkit/slices/PersonalDetailCounter'
const InputRadio = (props) => {
  
     const { personalInfo, inputInfo } = useSelector((state) => state.personalDetail)
    const dispatch = useDispatch()

  return (
    <div style={{display:"inline-block"}}>
         <label>{props.ele.inputLabel}</label>
       {<input type={props.ele.inputType} name={props.ele.inputName} value={props.ele.inputValue} onChange={(e)=>dispatch(setPersonalInfo({...personalInfo,[e.target.name]:e.target.value}))}/>}
       <label>{props.ele.inputValue}</label>
    </div>
       
         )
}


export default InputRadio