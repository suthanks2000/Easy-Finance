import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setSecuredLoansInfo,setInputInfo } from '../Redux-Toolkit/slices/SecuredLoansCounter';

const InputDropdown = (props) => {
    const { securedLoansInfo,inputInfo } =
    useSelector((state) => state.securedLoans);
    const dispatch = useDispatch();

    const d =  {
      inputLabel: "Car Type",
      inputName: "carType",
      inputType: "dropdown",
      vehicleType: [
        "car"
      ],
      dropValue: [
        "usedCar",
        "newCar"
      ],
      loanType:["vehicleloan"]
    }
 
    const add = (element) => {
      // return(
        dispatch(setSecuredLoansInfo({...securedLoansInfo,[element.target.name]:element.target.value}));
        if(element.target.value === "car"){
          // inputInfo.push(d)
          dispatch(setInputInfo([...inputInfo,d]))
          console.log(inputInfo)
          console.log([...inputInfo,d]) 
        }
        else if(element.target.value === "bike"){
          dispatch(setInputInfo(inputInfo))
        } 
    //   // )
    }


  return (
    
    <div>
           <label>{props.ele.inputLabel}</label>
           <select name={props.ele.inputName} onChange={(e)=>add(e)}>
             {props.ele.dropValue.map((e)=><option>{e}</option>)}
           </select>
    </div>
  )
}

export default InputDropdown