import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setPersonalInfo } from '../../Redux-Toolkit/slices/PersonalDetailCounter'
const InputDropdown = (props) => {
  
     const { personalInfo } = useSelector((state) => state.personalDetail)
    const dispatch = useDispatch()


const setDropdown = (ele) => {
  if(ele.target.value == "Select District"){
    alert("Please select others")
  }
  else{
  dispatch(setPersonalInfo({...personalInfo,[ele.target.name]:ele.target.value}))
}
}


  return (
    <div>
             <label>{props.ele.inputLabel}</label>
       <select name={props.ele.inputName} onChange={(e)=>setDropdown(e)}>
         {props.ele.dropValue.map((e)=><option>{e}</option>)}
         </select>
       </div>
       
         )
}


export default InputDropdown