import { useDispatch, useSelector } from 'react-redux'
import { setSecuredLoansInfo,setRenderedInfo,setUpdatedInfo } from '../../Redux-Toolkit/slices/SecuredLoansCounter';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { vehicleType } from '../Input-compon/CommonInputs';


const InputDropdown = (props) => {
    const { securedLoansInfo,inputInfo,updatedinfo } =
    useSelector((state) => state.securedLoans);
    const dispatch = useDispatch();
    // console.log(vehicleType.filter((value)=>value.id===id))
const handleDropdown = (e) => {
      dispatch(setSecuredLoansInfo({...securedLoansInfo, [e.target.name]: e.target.value}));
    
      let updatedInputInfo = [];
      const reupdate = updatedInputInfo.filter((e)=>e.inputName!= "vehicleType")
  console.log(reupdate)
        updatedinfo.forEach(element => {
            
          if(element.child?.length && element.inputName == e.target.name ){
              let childFiltered = element.child.filter((c)=>c.parentValue == e.target.value);
              updatedInputInfo = [...updatedInputInfo,...childFiltered];
              console.log(childFiltered)
              console.log(updatedInputInfo)
              
          }
          else if (securedLoansInfo.vehicleType == "bike"){
            
          }
          
          updatedInputInfo.push(element) 
        })

        // const updatedInputInfo = inputInfo.map(item => {
          
        //   if (item.parent === e.target.value &&  item.hasOwnProperty("hidden")) {
        //     return { ...item, hidden: false };
        //   }
        //   else if((item.inputName) !== (e.target.name) &&  (item.hasOwnProperty("hidden"))){
        //     return { ...item, hidden: true };
        //   }
        //   else {
        //       return item
        //   }
          
        // });
    
        dispatch(setUpdatedInfo(updatedInputInfo));
        console.log(updatedInputInfo);
      
    };

  return (
    
    <div>
           <label>{props.ele.inputLabel}</label>
           <select  name={props.ele.inputName} onChange={(element)=>handleDropdown(element)}>
             {props.ele.dropValue.map((e)=><option>{e}</option>)}
           </select>
    </div>
  )
}

export default InputDropdown