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
  return (
    <>
        <div>RegisterPersonalDetail</div>
        <div>
            {personalDetailInput}
        </div>
    </>
  )
}

export default RegisterPersonalDetail