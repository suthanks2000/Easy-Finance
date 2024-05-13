import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setPersonalInfo, setInputInfo } from '../../Redux-Toolkit/slices/PersonalDetailCounter'
const InputDropdown = (props) => {
  
     const { personalInfo, inputInfo } = useSelector((state) => state.personalDetail)
    const dispatch = useDispatch()

  return (
    <div>
             <label>{props.ele.inputLabel}</label>
       <select name={props.ele.inputName} onChange={(e)=>dispatch(setPersonalInfo({...personalInfo,[e.target.name]:e.target.value}))}>
         {props.ele.dropValue.map((e)=><option>{e}</option>)}
         </select>
       </div>
       
         )
}


export default InputDropdown