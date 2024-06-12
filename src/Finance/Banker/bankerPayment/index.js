import React, { useMemo, useState } from 'react'
import { Autocomplete, Button, MenuItem, TextField } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import BankerNavbar from '../bankerNavbar';


const BankerPayment = () => {
  
  const [grade, setgrade] = useState("");
  const loanName =["personal Loan","homeLoan","bikeLoan","businessLoan"];
  const LoanGrade =["A","B","C","D"];

  const Navigate=useNavigate();

  const Handlesent = () => {
    console.log("ji")
    Navigate('/banker/customerdata')
  }
  return (
    <>
    <BankerNavbar/>
    <div>BankerPayment</div>
    {grade}
    <form>
            {/* <div>
                <TextField
                id="outlined-textarea"
                label="Count"
                name='Count'
                placeholder="Count Of in Nums"
                multiline
                size="small"
                margin="normal"
                />
            </div>*/}
            <div>
            <TextField
          id="outlined-select-currency"
          select
          label="LoanGrade"
          name='LoanGrade'
          value={grade}
          helperText="Please select your Loan"
          size="small"
          margin="normal"
          onChange={(e)=>{setgrade(e.target.value)
            console.log(e.target.value)}}

        >
          {LoanGrade.map((option,i) => (
            <MenuItem key={i} value={option} >
              {option}
            </MenuItem>
          ))}
        </TextField>
            </div> 
            {/* <div>
          <Autocomplete sx={{ width: 150 }}
        id="free-solo-demo"
        loans
        size='small'
        options={LoanGrade.map((option) => option)}
        renderInput={(params) => <TextField {...params} label="loan Grade" />}
        >
        </Autocomplete>
          </div> */}
            <div>
            <Button
              variant="contained"
              color="success"
              size="small"
              onClick={()=>Handlesent()}
            >
              Request
            </Button>
          </div>
        </form>
    </>
    
  )
}

export default BankerPayment