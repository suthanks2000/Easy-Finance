import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import InputText from '../InputComponents/InputText'
import InputDropdown from '../InputComponents/InputDropdown'
import InputRadio from '../InputComponents/InputRadio'
const RegisterPersonalDetail = () => {

    const { personalInfo, inputInfo } = useSelector((state) => state.personalDetail);
    const dispatch = useDispatch()


    const personalDetailInput = inputInfo.map((ele) => {
        if (ele.inputType === "text" || ele.inputType === "number") {
          return <InputText key={ele.id} ele={ele} />;
        }
        if (ele.inputType === "dropdown") {
          return <InputDropdown key={ele.id} ele={ele} />;
        }
        if (ele.inputType === "radio") {
          return <InputRadio key={ele.id} ele={ele} />;
        }
        return null;
      });

      const handlePer_detail = () => {
        alert(1)
      }
  return (
    <>
        <div>RegisterPersonalDetail</div>
        {JSON.stringify(personalInfo)}
        <div>
            {personalDetailInput}
        </div>
        <div>
          <button type='button' onClick={()=>handlePer_detail()}>Register your Data </button>
        </div>
    </>
  )
}

export default RegisterPersonalDetail