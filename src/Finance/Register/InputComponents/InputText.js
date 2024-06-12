import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setPersonalInfo, setInputInfo } from '../../Redux-Toolkit/slices/PersonalDetailCounter'
const InputText = (props) => {
  
     const { personalInfo,temError } = useSelector((state) => state.personalDetail)
    const dispatch = useDispatch()

  return (
    <div>
         <label>{props.ele.inputLabel}</label>
         <input type={props.ele.inputType} name={props.ele.inputName}  placeholder={props.ele.inputPlaceholder} onChange={(e)=>dispatch(setPersonalInfo({...personalInfo,[e.target.name]:e.target.value}))}/>
         </div>
         )
}


export default InputText