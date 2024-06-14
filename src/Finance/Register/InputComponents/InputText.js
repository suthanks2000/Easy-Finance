import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setPersonalInfo, setInputInfo } from '../../Redux-Toolkit/slices/PersonalDetailCounter'
import { TextField } from '@mui/material'
const InputText = (props) => {
  
  const { personalInfo,temError } = useSelector((state) => state.personalDetail)
  const dispatch = useDispatch()

  const handleOnChange = (e) => {
   
    dispatch(setPersonalInfo({...personalInfo,[e.target.name]:e.target.value}))
  }
  const error = !personalInfo[props.ele.inputName] && temError;
  return (
    <div className="text-field-container">
      <TextField
        label={props.ele.inputLabel}
        size="small"
        placeholder={props.ele.inputPlaceholder}
        name={props.ele.inputName}
        value={personalInfo[props.ele.inputName] || ''}
        onChange={handleOnChange}
        error={Boolean(error)}
        helperText={error ? temError : ''}
      />
    </div>
    // <div>
    //      <label>{props.ele.inputLabel}</label>
    //      <input type={props.ele.inputType} name={props.ele.inputName}  placeholder={props.ele.inputPlaceholder} onChange={(e)=>dispatch(setPersonalInfo({...personalInfo,[e.target.name]:e.target.value}))}/>
    //      </div>
         )
}


export default InputText