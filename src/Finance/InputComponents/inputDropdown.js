import { useDispatch, useSelector } from 'react-redux'
import { setSecuredLoansInfo,setInputInfo } from '../Redux-Toolkit/slices/SecuredLoansCounter';

const InputDropdown = (props) => {
    const { securedLoansInfo,inputInfo } =
    useSelector((state) => state.securedLoans);
    const dispatch = useDispatch();
    
    const handleDropdown = (e) => {
      dispatch(setSecuredLoansInfo({...securedLoansInfo, [e.target.name]: e.target.value}));
    
      if(e.target.value === props.ele.dropValue[0]){
        alert("select another")
      }

      if(e.target.value){
        const updatedInputInfo = inputInfo.map(item => {
          
          if (item.parent === e.target.value &&  item.hasOwnProperty("hidden")  ) {
            return { ...item, hidden: false };
          }else if(item.inputName !== e.target.name &&  item.hasOwnProperty("hidden") && !props.ele.statechange){
            return { ...item, hidden: true };
          }
          else{
              return item
          }
          
        });
        dispatch(setInputInfo(updatedInputInfo))
        console.log(updatedInputInfo);
      }
    };

  return (
    
    <div>
           <label>{props.ele.inputLabel}</label>
           <select name={props.ele.inputName} onChange={(element)=>handleDropdown(element)}>
             {props.ele.dropValue.map((e)=><option>{e}</option>)}
           </select>
    </div>
  )
}

export default InputDropdown